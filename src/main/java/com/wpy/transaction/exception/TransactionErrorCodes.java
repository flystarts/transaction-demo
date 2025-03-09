package com.wpy.transaction.exception;

public class TransactionErrorCodes {
    public static final int TRANSACTION_PROCESSING = 1001;
    public static final int TRANSACTION_ID_EXISTS = 1002;
    public static final int ACCOUNT_NOT_EXIST = 1003;
    public static final int SOURCE_ACCOUNT_BALANCE_INSUFFICIENT = 1005;
    public static final int SOURCE_ACCOUNT_UPDATE_FAILED = 1006;
    public static final int TARGET_ACCOUNT_UPDATE_FAILED = 1007;
    public static final int SOURCE_ACCOUNT_EQUALS_TARGET_ACCOUNT = 1008;
}
