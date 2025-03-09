##需求  
实现一个高并发余额交易服务：
每笔交易包含唯一的交易 ID、源账户号码、目标账户号码、交易金额和时间戳。交易ID不需要服务生成。每笔交易需要更新源账户和目标账户的余额
每个请求包含一笔交易，要实时返回
需要保证数据一致性，并且支持高并发，支持重试

##架构  
技术选型: springboot+springJPA+postgreSQL+redis
设计原则: 一致性,高性能
部署: 部署在阿里云K8S上,通过service对外暴露服务

##设计方案  
###一致性  
由于这是个金融场景的需求, 需要强一致性.
一次交易需要读写账户表和交易表, 需要使用数据库事务(暂不考虑分布式事务).
可以分为悲观锁方案和乐观锁方案:
方案1：悲观锁，使用select for update 锁住单行, 相当于整个事务中都加了排他锁, 直到事务结束  
begin
select balance ,version from account where id=?  for update   //读源账户，加锁直到事务结束  
select balance ,version from account where id=?  for update   //读目标账户，加锁直到事务结束
update account set balance = ? where id= ?   //更新源账户    
update account set balance = ? where id= ?   //更新目标    
commit  

方案2： 乐观锁  
在账户表里加一个version字段,每次更新检查版本号是否正确,如果不对就更新失败等待重试. 
读表时不加排他锁,可以并发,直到更新时才加排他锁,减少了占锁的时长.
begin
select balance ,version from account where id=? //读源账户  
select balance ,version from account where id=?  //读目标账户  
balance = balance +amount  //计算更新后的值  
update account set balance = ?  version= ? where id= ? and version=?   //更新源账户  
update account set balance = ? version= ?  where id= ? and version=?   //更新目标  
commit    
这两种方案都可以, 要根据实际场景来选择,如果相同账户并发的几率大,容易冲突,建议选择悲观锁方案.这里我们选择乐观锁方案.  

###重试+幂等设计  
由于乐观锁可能会冲突,所以需要自动加重试, 重试要支持幂等  
采用@Retryable注解来实现自动重试,为支持幂等, 每次需要先检查交易ID是否已经存在  
为了提高性能, 在redis里写入交易ID,  先设置30s过期，  
注册事务同步处理器, 如果事务提交成功, 改为1天过期; 如果回滚, 则删除该交易ID  

###防死锁设计  
一次交易需要更新两个账户, 如果线程1先更新账户A再更新账户B, 线程2更新账户B再更新账户A,就容易出现死锁. 所以更新账户时需要进行排序,按照大小顺序进行更新  

##部署:
1. 在阿里云上开通容器服务ACK, 业务节点2个,其中节点1开通EIP方便远程登录  
2. 在阿里云开通云数据库postgreSQL, 云redis,并创建好账号和库  
3. 登录节点1安装kubectl,从阿里云控制台获取kubeconfig文件, 复制到节点$HOME/.kube/config 文件下  
4. 根据postgreSQL和redis信息刷新deploy目录下的configmap.yml文件
5. 将deploy目录上传到节点1,执行命令创建configmap和服务资源:  
   kubectl apply -f configmap.yml  
   kubectl apply -f deployment.yml  
   kubectl apply -f service.yml  

    执行curl命令检查接口正常:  
```
curl --request POST 'http://IP:8090/transactions' \
--header 'Content-Type: application/json' \
--data-raw '{
"sourceAccountNumber": "1001",
"targetAccountNumber": "1002",
"amount": 10.0,
"transactionId":"110"
}'
```

###编译打包      
mvn package -DskipTests=true  
本地运行:  
mvn spring-boot:run  

###测试   
执行单元测试:  
mvn test -Dtest=com.wpy.transaction.llt.*Test  
执行集成测试:  需要先启动服务,然后执行  
mvn test -Dtest=com.wpy.transaction.hlt.*Test  
执行性能测试:  
下载tools目录下的test.jmx,运行jmeter
测试报告在doc目录下