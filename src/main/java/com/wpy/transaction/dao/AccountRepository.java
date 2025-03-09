package com.wpy.transaction.dao;

import com.wpy.transaction.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByAccountNumber(String accountNumber);

    // 使用乐观锁更新
    @Transactional
    @Modifying
    @Query("UPDATE Account a SET a.balance = :balance, a.version = a.version + 1 WHERE a.accountNumber = :accountNumber AND a.version = :version")
    int updateBalance(String accountNumber, BigDecimal balance, long version);

    // 添加按 accountNumber 删除的方法
    @Transactional
    @Modifying
    void deleteByAccountNumber(String accountNumber);

}
