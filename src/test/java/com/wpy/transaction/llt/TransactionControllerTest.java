package com.wpy.transaction.llt;

import com.wpy.transaction.controller.TransactionController;
import com.wpy.transaction.dto.TransactionRequest;
import com.wpy.transaction.exception.TransactionErrorCodes;
import com.wpy.transaction.exception.TransactionException;
import com.wpy.transaction.service.impl.TransactionServiceImpl;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.math.BigDecimal;

import static org.mockito.Mockito.doThrow;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TransactionController.class)
@ActiveProfiles("test")
public class TransactionControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TransactionServiceImpl transactionService;

    @Test
    public void testAddTransaction_Success() throws Exception {

        String requestJson = "{\"transactionId\":\"123\",\"sourceAccountNumber\":\"1001\",\"targetAccountNumber\":\"1002\",\"amount\":100.0}";

        // 发送 POST 请求并验证响应
        mockMvc.perform(MockMvcRequestBuilders.post("/transactions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestJson))
                .andDo(print())
                .andExpect(status().isCreated());
    }

    @Test
    public void testAddTransaction_ValidationFailed() throws Exception {
        // 准备一个不完整的请求数据，触发校验失败
        String requestJson = "{\"transactionId\":\"123\",\"sourceAccount\":\"1001\"}";

        // 发送 POST 请求并验证响应
        mockMvc.perform(MockMvcRequestBuilders.post("/transactions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestJson))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }

    @Test
    public void testAddTransaction_TransactionException() throws Exception {
        // 准备请求数据
        TransactionRequest request = new TransactionRequest();
        request.setTransactionId("123");
        request.setSourceAccountNumber("1001");
        request.setTargetAccountNumber("1002");
        request.setAmount(BigDecimal.valueOf(100.0));

        String requestJson = "{\"transactionId\":\"123\",\"sourceAccountNumber\":\"1001\",\"targetAccountNumber\":\"1002\",\"amount\":100.0}";

        // 模拟 TransactionService 抛出 TransactionException
        doThrow(new TransactionException(TransactionErrorCodes.TRANSACTION_ID_EXISTS, "Transaction failed")).when(transactionService)
                .addTransaction(request.getTransactionId(), request.getSourceAccountNumber(), request.getTargetAccountNumber(), request.getAmount());

        // 发送 POST 请求并验证响应
        mockMvc.perform(MockMvcRequestBuilders.post("/transactions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestJson))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().string(Matchers.containsString("Transaction failed")));
    }
}
