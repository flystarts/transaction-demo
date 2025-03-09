package com.wpy.transaction.dto;


import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;

@Data
public class TransactionRequest {

    @NotBlank(message = "Source account number cannot be blank")
    private String sourceAccountNumber;

    @NotBlank(message = "transactionId cannot be blank")
    private String transactionId;

    @NotBlank(message = "Target account number cannot be blank")
    private String targetAccountNumber;

    @NotNull(message = "Transaction amount cannot be null")
    @Positive(message = "Transaction amount must be greater than 0")
    private BigDecimal amount;
}
