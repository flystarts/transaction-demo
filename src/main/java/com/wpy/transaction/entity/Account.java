package com.wpy.transaction.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@Table(indexes = {@Index(columnList = "accountNumber", name = "idx_account_accountNumber", unique = true)})
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountNumber;
    private BigDecimal balance;
    private Long version;

    public Account(String sourceAccountNumber, BigDecimal v) {
        this.accountNumber = sourceAccountNumber;
        this.balance = v;
        this.version = 0L;
    }

    public Account(String sourceAccountNumber, Double v) {
        this.accountNumber = sourceAccountNumber;
        this.balance = BigDecimal.valueOf(v);
        this.version = 0L;
    }
}
