package vn.vti.moneypig.services;


import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.database.SequenceGeneratorService;
import vn.vti.moneypig.models.Transaction;
import vn.vti.moneypig.repositories.TransactionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public Transaction insert(Transaction newTransaction){

        Optional<Transaction> optionalTransaction = transactionRepository.findById(newTransaction.getId());
        if(optionalTransaction.isEmpty()){
            return null;
        }

        Long id  = sequenceGeneratorService.generateSequence(Transaction.SEQUENCE_NAME);
        newTransaction.setId(id);

        return transactionRepository.insert(newTransaction);
    }

    public Transaction findById(Long id){
        Optional<Transaction> optionalTransaction =  transactionRepository.findById(id);
        return optionalTransaction.orElse(null);
    }
    public Transaction update(Transaction updateTransaction){
        Optional<Transaction> optionalTransaction = transactionRepository.findById(updateTransaction.getId());
        if(optionalTransaction.isEmpty()){
            return null;
        }
        Transaction foundTransaction = optionalTransaction.get();
        foundTransaction.setMoney(updateTransaction.getMoney());
        foundTransaction.setName(updateTransaction.getName());
        foundTransaction.setWithPerson(updateTransaction.getWithPerson());
        return transactionRepository.save(foundTransaction);
    }


    public boolean delete(long idTransaction){
        Optional<Transaction> optionalTransaction = transactionRepository.findById(idTransaction);
        if(optionalTransaction.isEmpty()){
            return false;
        }
        Transaction foundTransaction = optionalTransaction.get();
        foundTransaction.setActive(0);
        Transaction updateTransaction = transactionRepository.save(foundTransaction);
        return true;
    }


    public List<Transaction> findAll()
    {
        return transactionRepository.findAll();
    }

    public List<Transaction> findByUserID(Long userID){
        return transactionRepository.findAllByUserId(userID);
    }

    public List<Transaction> findByDate(Long startDate, Long endDate, Long userID){
        return transactionRepository.findTransactionsByDateAndUser(startDate, endDate, userID);
    }

    public List<Transaction> findByDateRange(Long startDate, Long endDate){
        return transactionRepository.findTransactionsByDateRange(startDate, endDate);
    }

}
