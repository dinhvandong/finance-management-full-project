package vn.vti.moneypig.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.database.SequenceGeneratorService;
import vn.vti.moneypig.models.Category;
import vn.vti.moneypig.models.TransactionGroup;
import vn.vti.moneypig.repositories.TransactionGroupRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionGroupService {

    @Autowired
    TransactionGroupRepository transactionGroupRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public TransactionGroup insert(TransactionGroup transactionGroup){
        Long id = sequenceGeneratorService.generateSequence(TransactionGroup.SEQUENCE_NAME);
        return transactionGroupRepository.insert(transactionGroup);
    }

    public TransactionGroup update(TransactionGroup transactionGroup){
        Optional<TransactionGroup> optionalTransactionGroup = transactionGroupRepository.findById(transactionGroup.getId());
        if(optionalTransactionGroup.isPresent()){
            TransactionGroup update = optionalTransactionGroup.get();
            update.setCode(transactionGroup.getCode());
            update.setName(transactionGroup.getName());
            update.setCategoryList(transactionGroup.getCategoryList());
            update.setUserID(transactionGroup.getUserID());
            return transactionGroupRepository.save(update);
        }
        return  null;
    }

    public List<TransactionGroup> findAll()
    {
        return transactionGroupRepository.findAll();
    }

    public List<TransactionGroup> findByUserId(Long userID){
        return transactionGroupRepository.findAllByUserID(userID);
    }

    public TransactionGroup addCategory(Long id, Category category){
        return null;
    }

    public TransactionGroup updateCategory(Long idGroup, Category category){
        return  null;
    }
}
