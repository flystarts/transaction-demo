package com.wpy.transaction.service.impl;

import com.wpy.transaction.dao.AccountRepository;
import com.wpy.transaction.entity.Account;
import com.wpy.transaction.exception.TransactionConflictException;
import com.wpy.transaction.exception.TransactionErrorCodes;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@Slf4j
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Transactional
    public void updateAccount(String sourceAccountNumber, String targetAccountNumber, BigDecimal amount) {
        if (sourceAccountNumber.equals(targetAccountNumber)) {
            log.error("The source account and target account is same");
            throw new TransactionException(TransactionErrorCodes.SOURCE_ACCOUNT_EQUALS_TARGET_ACCOUNT, "The source account and target account is same.");
        }

        // 为了避免死锁，按照账户的大小顺序进行查询和更新
        String firstAccountNumber = sourceAccountNumber.compareTo(targetAccountNumber) < 0 ? sourceAccountNumber : targetAccountNumber;
        String secondAccountNumber = sourceAccountNumber.compareTo(targetAccountNumber) < 0 ? targetAccountNumber : sourceAccountNumber;

        Account firstAccount = getAccount(firstAccountNumber);
        Account secondAccount = getAccount(secondAccountNumber);

        Account sourceAccount = sourceAccountNumber.equals(firstAccountNumber) ? firstAccount : secondAccount;
        Account targetAccount = targetAccountNumber.equals(firstAccountNumber) ? firstAccount : secondAccount;

        // 检查源账户余额
        checkSourceAccountBalance(sourceAccount, amount);

        // 按照顺序更新账户余额
        if (firstAccountNumber.equals(sourceAccountNumber)) {
            updateSourceAccountBalance(firstAccountNumber, sourceAccount, amount);
            updateTargetAccountBalance(secondAccountNumber, targetAccount, amount);
        } else {
            updateTargetAccountBalance(firstAccountNumber, targetAccount, amount);
            updateSourceAccountBalance(secondAccountNumber, sourceAccount, amount);
        }
    }

    private void checkSourceAccountBalance(Account sourceAccount, BigDecimal amount) {
        if (sourceAccount.getBalance().compareTo(amount) < 0) {
            log.error("The balance of the source account is insufficient");
            throw new TransactionException(TransactionErrorCodes.SOURCE_ACCOUNT_BALANCE_INSUFFICIENT, "The balance of the source account is insufficient.");
        }
    }

    private void updateSourceAccountBalance(String accountNumber, Account account, BigDecimal amount) {
        int updateCount = accountRepository.updateBalance(accountNumber, account.getBalance().subtract(amount), account.getVersion());
        if (updateCount == 0) {
            log.error("Failed to update the balance of the source account");
            throw new TransactionConflictException(TransactionErrorCodes.SOURCE_ACCOUNT_UPDATE_FAILED, "Failed to update the balance of the source account. The data has been modified by another transaction. Please try again.");
        }
    }

    private void updateTargetAccountBalance(String accountNumber, Account account, BigDecimal amount) {
        int updateCount = accountRepository.updateBalance(accountNumber, account.getBalance().add(amount), account.getVersion());
        if (updateCount == 0) {
            log.error("Failed to update the balance of the target account");
            throw new TransactionConflictException(TransactionErrorCodes.TARGET_ACCOUNT_UPDATE_FAILED, "Failed to update the balance of the target account. The data has been modified by another transaction. Please try again.");
        }
    }

    private Account getAccount(String accountNumber) {
        Optional<Account> accountOptional = accountRepository.findByAccountNumber(accountNumber);
        if (!accountOptional.isPresent()) {
            throw new TransactionException(TransactionErrorCodes.ACCOUNT_NOT_EXIST, "The account does not exist.");
        }
        return accountOptional.get();
    }


}