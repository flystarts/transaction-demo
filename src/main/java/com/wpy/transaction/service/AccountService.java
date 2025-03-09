package com.wpy.transaction.service;

import java.math.BigDecimal;

public interface AccountService {

    /**
     * 更新账户余额，实现从源账户向目标账户转账的功能。
     *
     * @param sourceAccountNumber 源账户的账号，资金将从该账户转出。
     * @param targetAccountNumber 目标账户的账号，资金将转入该账户。
     * @param amount              转账的金额，使用 BigDecimal 类型以确保精确计算。
     */
    public void updateAccount(String sourceAccountNumber, String targetAccountNumber, BigDecimal amount);
}
