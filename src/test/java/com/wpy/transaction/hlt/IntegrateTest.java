package com.wpy.transaction.hlt;

import com.wpy.transaction.exception.TransactionErrorCodes;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import java.util.UUID;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;

// 集成测试用例

public class IntegrateTest {

    @BeforeEach
    public void setUp() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 8090;
    }

    private String generateRandomTransactionId() {
        return UUID.randomUUID().toString();
    }

    @Test
    public void testProcessTransaction_Success() {
        String transactionId = generateRandomTransactionId();
        String requestBody = "{\"transactionId\": \"" + transactionId + "\", \"sourceAccountNumber\": \"1001\", \"targetAccountNumber\": \"1002\", \"amount\": 50.0}";

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.CREATED.value());
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }
    }

    @Test
    public void testProcessTransaction_TransactionProcessing() {
        String transactionId = generateRandomTransactionId();
        String requestBody = "{\"transactionId\": \"" + transactionId + "\", \"sourceAccountNumber\": \"1001\", \"targetAccountNumber\": \"1002\", \"amount\": 1.0}";

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.CREATED.value());
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.BAD_REQUEST.value())
                    .body(containsString(String.valueOf(TransactionErrorCodes.TRANSACTION_PROCESSING))); // 验证错误码
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }
    }

    @Test
    public void testProcessTransaction_SourceAccountNotExists() {
        String transactionId = generateRandomTransactionId();
        String requestBody = "{\"transactionId\": \"" + transactionId + "\", \"sourceAccountNumber\": \"9999\", \"targetAccountNumber\": \"1002\", \"amount\": 50.0}";

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.BAD_REQUEST.value())
                    .body(containsString(String.valueOf(TransactionErrorCodes.ACCOUNT_NOT_EXIST))); // 验证错误码
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }
    }

    @Test
    public void testProcessTransaction_TargetAccountNotExists() {
        String transactionId = generateRandomTransactionId();
        String requestBody = "{\"transactionId\": \"" + transactionId + "\", \"sourceAccountNumber\": \"1001\", \"targetAccountNumber\": \"9999\", \"amount\": 50.0}";

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.BAD_REQUEST.value())
                    .body(containsString(String.valueOf(TransactionErrorCodes.ACCOUNT_NOT_EXIST))); // 验证错误码
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }
    }

    @Test
    public void testProcessTransaction_SourceAccountBalanceNotEnough() {
        String transactionId = generateRandomTransactionId();
        String requestBody = "{\"transactionId\": \"" + transactionId + "\", \"sourceAccountNumber\": \"1001\", \"targetAccountNumber\": \"1002\", \"amount\": 500000.0}";

        try {
            given()
                    .contentType(ContentType.JSON)
                    .body(requestBody)
                    .when()
                    .post("/transactions")
                    .then()
                    .log().all()
                    .statusCode(HttpStatus.BAD_REQUEST.value())
                    .body(containsString(String.valueOf(TransactionErrorCodes.SOURCE_ACCOUNT_BALANCE_INSUFFICIENT))); // 验证错误码
        } catch (AssertionError e) {
            System.err.println("测试用例失败，响应信息如下：");
            throw e;
        }
    }
}