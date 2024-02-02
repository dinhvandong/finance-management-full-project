package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import vn.vti.moneypig.models.Transaction;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, Long> {

    List<Transaction> findAllByUserId(Long userID);
    @Query("{'createdDate': {$gte: ?0, $lte: ?1}, 'userId': ?2}")
    List<Transaction> findTransactionsByDateAndUser(Long fromDate, Long toDate, Long userId);
    @Query("{'createdDate': {$gte: ?0, $lte: ?1}}")
    List<Transaction> findTransactionsByDateRange(Long fromDate, Long toDate);
}
