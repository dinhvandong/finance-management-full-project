package vn.vti.moneypig.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.moneypig.models.Image;
import vn.vti.moneypig.models.TransactionGroup;

import java.util.List;
import java.util.Optional;

public interface  TransactionGroupRepository extends MongoRepository<TransactionGroup, Long> {

    List<TransactionGroup> findAllByUserID(Long userID);

}
