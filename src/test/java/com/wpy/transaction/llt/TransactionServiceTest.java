package com.wpy.transaction.llt;

import com.wpy.transaction.dao.TransactionRepository;
import com.wpy.transaction.entity.Transaction;
import com.wpy.transaction.exception.TransactionErrorCodes;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.impl.AccountServiceImpl;
import com.wpy.transaction.service.impl.TransactionServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private AccountServiceImpl accountService;

    @Mock
    private RedisTemplate<String, String> redisTemplate;

    @Mock
    private ValueOperations<String, String> valueOperations;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        when(redisTemplate.opsForValue()).thenReturn(valueOperations);
    }

    @Test
    void testAddTransaction_TransactionProcessing() {
        String transactionId = "123";
        String sourceAccountNumber = "456";
        String targetAccountNumber = "789";
        BigDecimal amount = BigDecimal.TEN;

        String txKey = "tx:" + transactionId;
        when(valueOperations.setIfAbsent(txKey, "processing", 30, TimeUnit.SECONDS)).thenReturn(false);

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.TRANSACTION_PROCESSING, exception.getErrorCode());
    }

    @Test
    void testAddTransaction_TransactionIdExists() {
        String transactionId = "123";
        String sourceAccountNumber = "456";
        String targetAccountNumber = "789";
        BigDecimal amount = BigDecimal.TEN;

        String txKey = "tx:" + transactionId;
        when(valueOperations.setIfAbsent(txKey, "processing", 30, TimeUnit.SECONDS)).thenReturn(true);
        when(transactionRepository.findByTransactionId(transactionId)).thenReturn(Optional.of(new Transaction()));

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.TRANSACTION_ID_EXISTS, exception.getErrorCode());
    }

    @Test
    void testAddTransaction_Success() {
        String transactionId = "123";
        String sourceAccountNumber = "456";
        String targetAccountNumber = "789";
        BigDecimal amount = BigDecimal.TEN;

        String txKey = "tx:" + transactionId;
        when(valueOperations.setIfAbsent(txKey, "processing", 30, TimeUnit.SECONDS)).thenReturn(true);
        when(transactionRepository.findByTransactionId(transactionId)).thenReturn(Optional.empty());

        TransactionSynchronizationManager.initSynchronization();
        try {
            transactionService.addTransaction(transactionId, sourceAccountNumber, targetAccountNumber, amount);

            verify(accountService, times(1)).updateAccount(sourceAccountNumber, targetAccountNumber, amount);
            verify(transactionRepository, times(1)).save(any(Transaction.class));
        } finally {
            TransactionSynchronizationManager.clearSynchronization();
        }
    }


}