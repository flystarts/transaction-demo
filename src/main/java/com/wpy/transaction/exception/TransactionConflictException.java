package com.wpy.transaction.exception;


public class TransactionConflictException extends RuntimeException {
    private final int errorCode;

    public TransactionConflictException(int errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public int getErrorCode() {
        return errorCode;
    }
}