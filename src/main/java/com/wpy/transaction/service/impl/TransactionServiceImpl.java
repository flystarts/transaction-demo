package com.wpy.transaction.service.impl;

import com.wpy.transaction.dao.TransactionRepository;
import com.wpy.transaction.entity.Transaction;
import com.wpy.transaction.exception.TransactionConflictException;
import com.wpy.transaction.exception.TransactionErrorCodes;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronizationAdapter;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountServiceImpl accountService;

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    private static final String TX_KEY_PREFIX = "tx:";

    // 如果乐观锁冲突，自动重试
    @Retryable(
            value = {TransactionConflictException.class},
            maxAttempts = 3,
            backoff = @Backoff(delay = 200)
    )


    @Transactional
    public void addTransaction(String transactionId, String sourceAccountNumber, String targetAccountNumber, BigDecimal amount) {

        // 1.Redis事务标识写入，先设置30s过期，如果成功，再改为1天过期
        String txKey = TX_KEY_PREFIX + transactionId;
        Boolean lockAcquired = redisTemplate.opsForValue().setIfAbsent(txKey, "processing", 30, TimeUnit.SECONDS);
        if (Boolean.FALSE.equals(lockAcquired)) {
            throw new TransactionException(TransactionErrorCodes.TRANSACTION_PROCESSING, "The transaction is being processed. Please do not submit it again.");
        }

        // 2.注册事务同步处理器
        if (TransactionSynchronizationManager.isActualTransactionActive()) {
            TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronizationAdapter() {
                @Override
                public void afterCommit() {
                    redisTemplate.expire(txKey, 30, TimeUnit.MINUTES);
                    //log.info("Transaction committed successfully. Extended expiration time: {}", txKey);
                }

                @Override
                public void afterCompletion(int status) {
                    if (status == STATUS_ROLLED_BACK) {
                        redisTemplate.delete(txKey);
                        log.warn("Transaction rolled back. Deleted Redis record: {}", txKey);
                    }
                }
            });
        }

        doAddTransaction(transactionId, sourceAccountNumber, targetAccountNumber, amount);
    }

    private void doAddTransaction(String transactionId, String sourceAccountNumber, String targetAccountNumber, BigDecimal amount) {

        // 检查 transactionId 是否已经存在
        Optional<Transaction> existingTransaction = transactionRepository.findByTransactionId(transactionId);
        if (existingTransaction.isPresent()) {
            log.error("The transaction ID already exists");
            throw new TransactionException(TransactionErrorCodes.TRANSACTION_ID_EXISTS, "The transaction ID already exists. Please do not process it again.");
        }

        accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);

        // 记录交易
        Transaction transactionRecord = new Transaction(transactionId, sourceAccountNumber, targetAccountNumber, amount, LocalDateTime.now());
        transactionRepository.save(transactionRecord);

        //log.info("Transaction succeeded.");
    }


}