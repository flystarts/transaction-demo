package com.wpy.transaction.tool;

import com.wpy.transaction.dao.AccountRepository;
import com.wpy.transaction.entity.Account;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@ActiveProfiles("test")
public class MakeDataTool {

    @Autowired
    AccountRepository accountRepository;

    public void makeAccounts() {

        int num = 1;

        for (int i = 0; i < 20; i++) {
            List<Account> accounts = new ArrayList<>();
            for (int j = 0; j < 100; j++) {
                Account account = new Account("account" + num, 10000000.0);
                accounts.add(account);
                num++;
            }
            accountRepository.saveAll(accounts);
            System.out.println("save num = " + num);
        }
    }
}
