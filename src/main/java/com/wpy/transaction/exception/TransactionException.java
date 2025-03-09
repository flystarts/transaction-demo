package com.wpy.transaction.exception;


public class TransactionException extends RuntimeException {
    private final int errorCode;

    public TransactionException(int errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public int getErrorCode() {
        return errorCode;
    }
}