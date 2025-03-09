package com.wpy.transaction.llt;

import com.wpy.transaction.dao.AccountRepository;
import com.wpy.transaction.entity.Account;
import com.wpy.transaction.exception.TransactionConflictException;
import com.wpy.transaction.exception.TransactionErrorCodes;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.impl.AccountServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class AccountServiceTest {

    @Mock
    private AccountRepository accountRepository;

    @InjectMocks
    private AccountServiceImpl accountService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testUpdateAccount_SourceEqualsTarget() {
        String accountNumber = "123456";
        BigDecimal amount = BigDecimal.TEN;

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            accountService.updateAccount(accountNumber, accountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.SOURCE_ACCOUNT_EQUALS_TARGET_ACCOUNT, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_SourceAccountNotExist() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.TEN;

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.empty());

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.ACCOUNT_NOT_EXIST, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_TargetAccountNotExist() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.TEN;

        Account sourceAccount = new Account();
        sourceAccount.setAccountNumber(sourceAccountNumber);
        sourceAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        sourceAccount.setVersion(1L);

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.of(sourceAccount));
        when(accountRepository.findByAccountNumber(targetAccountNumber)).thenReturn(Optional.empty());

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.ACCOUNT_NOT_EXIST, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_SourceAccountBalanceInsufficient() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.valueOf(100);

        Account sourceAccount = new Account();
        sourceAccount.setAccountNumber(sourceAccountNumber);
        sourceAccount.setBalance(BigDecimal.TEN);
        // 明确 version 为 long 类型
        sourceAccount.setVersion(1L);

        Account targetAccount = new Account();
        targetAccount.setAccountNumber(targetAccountNumber);
        targetAccount.setBalance(BigDecimal.valueOf(100));
        targetAccount.setVersion(1L);

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.of(sourceAccount));
        when(accountRepository.findByAccountNumber(targetAccountNumber)).thenReturn(Optional.of(targetAccount));

        TransactionException exception = assertThrows(TransactionException.class, () -> {
            accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.SOURCE_ACCOUNT_BALANCE_INSUFFICIENT, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_SourceAccountUpdateFailed() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.TEN;

        Account sourceAccount = new Account();
        sourceAccount.setAccountNumber(sourceAccountNumber);
        sourceAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        sourceAccount.setVersion(1L);

        Account targetAccount = new Account();
        targetAccount.setAccountNumber(targetAccountNumber);
        targetAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        targetAccount.setVersion(1L);

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.of(sourceAccount));
        when(accountRepository.findByAccountNumber(targetAccountNumber)).thenReturn(Optional.of(targetAccount));
        when(accountRepository.updateBalance(sourceAccountNumber, sourceAccount.getBalance().subtract(amount), sourceAccount.getVersion())).thenReturn(0);

        TransactionConflictException exception = assertThrows(TransactionConflictException.class, () -> {
            accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.SOURCE_ACCOUNT_UPDATE_FAILED, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_TargetAccountUpdateFailed() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.TEN;

        Account sourceAccount = new Account();
        sourceAccount.setAccountNumber(sourceAccountNumber);
        sourceAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        sourceAccount.setVersion(1L);

        Account targetAccount = new Account();
        targetAccount.setAccountNumber(targetAccountNumber);
        targetAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        targetAccount.setVersion(1L);

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.of(sourceAccount));
        when(accountRepository.findByAccountNumber(targetAccountNumber)).thenReturn(Optional.of(targetAccount));
        when(accountRepository.updateBalance(sourceAccountNumber, sourceAccount.getBalance().subtract(amount), sourceAccount.getVersion())).thenReturn(1);
        when(accountRepository.updateBalance(targetAccountNumber, targetAccount.getBalance().add(amount), targetAccount.getVersion())).thenReturn(0);

        TransactionConflictException exception = assertThrows(TransactionConflictException.class, () -> {
            accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);
        });

        assertEquals(TransactionErrorCodes.TARGET_ACCOUNT_UPDATE_FAILED, exception.getErrorCode());
    }

    @Test
    void testUpdateAccount_Success() {
        String sourceAccountNumber = "123456";
        String targetAccountNumber = "654321";
        BigDecimal amount = BigDecimal.TEN;

        Account sourceAccount = new Account();
        sourceAccount.setAccountNumber(sourceAccountNumber);
        sourceAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        sourceAccount.setVersion(1L);

        Account targetAccount = new Account();
        targetAccount.setAccountNumber(targetAccountNumber);
        targetAccount.setBalance(BigDecimal.valueOf(100));
        // 明确 version 为 long 类型
        targetAccount.setVersion(1L);

        when(accountRepository.findByAccountNumber(sourceAccountNumber)).thenReturn(Optional.of(sourceAccount));
        when(accountRepository.findByAccountNumber(targetAccountNumber)).thenReturn(Optional.of(targetAccount));
        when(accountRepository.updateBalance(sourceAccountNumber, sourceAccount.getBalance().subtract(amount), sourceAccount.getVersion())).thenReturn(1);
        when(accountRepository.updateBalance(targetAccountNumber, targetAccount.getBalance().add(amount), targetAccount.getVersion())).thenReturn(1);

        accountService.updateAccount(sourceAccountNumber, targetAccountNumber, amount);

        verify(accountRepository, times(2)).findByAccountNumber(anyString());
        verify(accountRepository, times(1)).updateBalance(sourceAccountNumber, sourceAccount.getBalance().subtract(amount), sourceAccount.getVersion());
        verify(accountRepository, times(1)).updateBalance(targetAccountNumber, targetAccount.getBalance().add(amount), targetAccount.getVersion());
    }
}