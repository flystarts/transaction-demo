package com.wpy.transaction.service;

import java.math.BigDecimal;

public interface TransactionService {

    /**
     * 添加一笔新的交易记录。
     *
     * @param transactionId       交易的唯一标识符，用于标识每一笔交易。
     * @param sourceAccountNumber 交易的源账户号码，资金从该账户转出。
     * @param targetAccountNumber 交易的目标账户号码，资金将转入该账户。
     * @param amount              交易的金额，使用 BigDecimal 类型以确保精确计算。
     */
    void addTransaction(String transactionId, String sourceAccountNumber, String targetAccountNumber, BigDecimal amount);
}
