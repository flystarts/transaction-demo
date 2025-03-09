package com.wpy.transaction.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(indexes = {@Index(columnList = "transactionId", name = "idx_transaction_transactionId", unique = true)})
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String transactionId;
    private String sourceAccount;
    private String targetAccount;
    private BigDecimal amount;
    private LocalDateTime timestamp;

    public Transaction(String transactionId, String sourceAccount, String targetAccount, BigDecimal amount, LocalDateTime timestamp) {
        this.transactionId = transactionId;
        this.sourceAccount = sourceAccount;
        this.targetAccount = targetAccount;
        this.amount = amount;
        this.timestamp = timestamp;

    }
}
