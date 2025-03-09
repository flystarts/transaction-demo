package com.wpy.transaction.llt;


import com.wpy.transaction.dao.AccountRepository;
import com.wpy.transaction.dao.TransactionRepository;
import com.wpy.transaction.entity.Account;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.impl.TransactionServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@Slf4j
@SpringBootTest
@ActiveProfiles("test")
public class TransactionTest {

    @Autowired
    private TransactionServiceImpl transactionService;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    private static final String TX_KEY_PREFIX = "tx:";

    @Test
    public void testAddTransaction_Success() {
        String transactionId = "125";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 10000.0));
        accountRepository.save(new Account(targetAccountNumber, 10000.0));

        transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(50.0));
        Account sourceAccount = accountRepository.findByAccountNumber(sourceAccountNumber).get();
        Account targetAccount = accountRepository.findByAccountNumber(targetAccountNumber).get();
        assertThat(sourceAccount.getBalance().compareTo(BigDecimal.valueOf(9950.0))).isEqualTo(0);
        assertThat(targetAccount.getBalance().compareTo(BigDecimal.valueOf(10050.0))).isEqualTo(0);
        assertThat(sourceAccount.getVersion()).isEqualTo(1);
        assertThat(targetAccount.getVersion()).isEqualTo(1);

        assertThat(redisTemplate.opsForValue().get(txKey)).isNotNull();

    }

    @Test
    public void testAddTransaction_account_not_exist() {
        String transactionId = "123";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, "not exist", BigDecimal.valueOf(50.0));
        });
        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, "not exist", targetAccountNumber, BigDecimal.valueOf(50.0));
        });
        assertThat(redisTemplate.opsForValue().get(txKey)).isNull();

    }

    @Test
    public void testAddTransaction_account_same() {
        String transactionId = "123";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, sourceAccountNumber, BigDecimal.valueOf(50.0));
        });
        assertThat(redisTemplate.opsForValue().get(txKey)).isNull();

    }

    @Test
    public void testAddTransaction_transaction_exist() {
        String transactionId = "123";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(50.0));
        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(50.0));
        });

    }

    @Test
    public void testAddTransaction_balance_not_enough() {
        String transactionId = "123";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(150.0));
        });
        assertThat(redisTemplate.opsForValue().get(txKey)).isNull();

    }

    @Test
    public void testAddTransaction_retry() {
        String transactionId = "123";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";
        String txKey = TX_KEY_PREFIX + transactionId;

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId);
        redisTemplate.delete(txKey);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(150.0));
        });
        assertThat(redisTemplate.opsForValue().get(txKey)).isNull();
        transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(50.0));
        assertThat(redisTemplate.opsForValue().get(txKey)).isNotNull();

    }

    // 模拟死锁场景
    @Test
    public void testAddTransaction_deadlock() throws InterruptedException {
        String transactionId1 = "123";
        String transactionId2 = "124";
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        transactionRepository.deleteByTransactionId(transactionId1);
        transactionRepository.deleteByTransactionId(transactionId2);
        redisTemplate.delete(TX_KEY_PREFIX + transactionId1);
        redisTemplate.delete(TX_KEY_PREFIX + transactionId2);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        // 创建第一个线程
        Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                transactionService.addTransaction(transactionId1, sourceAccountNumber, targetAccountNumber, java.math.BigDecimal.valueOf(50.0));
            }
        });

        // 创建第二个线程
        Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                transactionService.addTransaction(transactionId2, targetAccountNumber, sourceAccountNumber, java.math.BigDecimal.valueOf(50.0));
            }
        });

        // 启动线程
        thread1.start();
        thread2.start();
        thread1.join();
        thread2.join();

        Account sourceAccount = accountRepository.findByAccountNumber(sourceAccountNumber).get();
        Account targetAccount = accountRepository.findByAccountNumber(targetAccountNumber).get();
        assertThat(sourceAccount.getBalance().compareTo(BigDecimal.valueOf(100.0))).isEqualTo(0);
        assertThat(targetAccount.getBalance().compareTo(BigDecimal.valueOf(100.0))).isEqualTo(0);

    }


    @Test
    public void testAddTransaction_conflict() throws InterruptedException {
        String sourceAccountNumber = "1001";
        String targetAccountNumber = "1002";

        accountRepository.deleteByAccountNumber(sourceAccountNumber);
        accountRepository.deleteByAccountNumber(targetAccountNumber);
        accountRepository.save(new Account(sourceAccountNumber, 100.0));
        accountRepository.save(new Account(targetAccountNumber, 100.0));

        AtomicInteger transactionId = new AtomicInteger(1);
        AtomicInteger failedCount = new AtomicInteger(0);
        for (int i = 0; i < 5; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int j = 0; j < 10; j++) {
                        try {
                            Integer trans = transactionId.getAndIncrement();
                            transactionRepository.deleteByTransactionId(trans.toString());
                            redisTemplate.delete(TX_KEY_PREFIX + transactionId);
                            transactionService.addTransaction(trans.toString(), sourceAccountNumber, targetAccountNumber, BigDecimal.valueOf(1.0));
                        } catch (Exception e) {
                            log.error(e.getMessage());
                            failedCount.incrementAndGet();
                        }
                    }
                }
            }).start();
        }

        Thread.sleep(10000);

        Account sourceAccount = accountRepository.findByAccountNumber(sourceAccountNumber).get();
        Account targetAccount = accountRepository.findByAccountNumber(targetAccountNumber).get();
        log.info("failed count = {}", failedCount.get());
        log.info("sourceAccount balance = {}", sourceAccount.getBalance());
        log.info("targetAccount balance = {}", targetAccount.getBalance());
        assertThat(failedCount.get()).isGreaterThan(0);

    }


}
