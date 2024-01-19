package vn.vti.moneypig.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.database.SequenceGeneratorService;
import vn.vti.moneypig.models.Category;
import vn.vti.moneypig.models.CategoryGroup;
import vn.vti.moneypig.repositories.CategoryGroupRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryGroupService {

    @Autowired
    CategoryGroupRepository transactionGroupRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public CategoryGroup insert(CategoryGroup transactionGroup){
        Long id = sequenceGeneratorService.generateSequence(CategoryGroup.SEQUENCE_NAME);
        return transactionGroupRepository.insert(transactionGroup);
    }

    public CategoryGroup update(CategoryGroup transactionGroup){
        Optional<CategoryGroup> optionalTransactionGroup = transactionGroupRepository.findById(transactionGroup.getId());
        if(optionalTransactionGroup.isPresent()){
            CategoryGroup update = optionalTransactionGroup.get();
            update.setCode(transactionGroup.getCode());
            update.setName(transactionGroup.getName());
            update.setCategoryList(transactionGroup.getCategoryList());
            //update.setUserID(transactionGroup.getUserID());
            return transactionGroupRepository.save(update);
        }
        return  null;
    }

    public List<CategoryGroup> findAll()
    {
        return transactionGroupRepository.findAll();
    }

//    public List<CategoryGroup> findByUserId(Long userID){
//        return transactionGroupRepository.findAllByUserID(userID);
//    }

    public CategoryGroup addCategory(Long id, Category category){
        return null;
    }

    public CategoryGroup updateCategory(Long idGroup, Category category){
        return  null;
    }
}
