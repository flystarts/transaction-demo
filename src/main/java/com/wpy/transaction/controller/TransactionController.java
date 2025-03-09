package com.wpy.transaction.controller;

import com.wpy.transaction.dto.TransactionRequest;
import com.wpy.transaction.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * TransactionController 类负责处理与交易相关的 HTTP 请求。
 */
@Slf4j
@RestController
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    /**
     * 处理 POST 请求，用于添加新的交易记录。
     *
     * @param request 包含交易信息的请求对象，使用 @Valid 注解确保请求数据的有效性。
     * @return 返回一个包含 HTTP 状态码的响应实体，若交易添加成功，返回 201 Created。
     */
    @PostMapping("/transactions")
    public ResponseEntity<Object> addTransaction(@Valid @RequestBody TransactionRequest request) {

        transactionService.addTransaction(request.getTransactionId(), request.getSourceAccountNumber(), request.getTargetAccountNumber(), request.getAmount());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}




