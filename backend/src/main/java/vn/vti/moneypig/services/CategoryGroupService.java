package vn.vti.moneypig.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
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
    private MongoTemplate mongoTemplate;
    @Autowired
    CategoryGroupRepository categoryGroupRepository;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    public CategoryGroup insert(CategoryGroup transactionGroup){
        Long id = sequenceGeneratorService.generateSequence(CategoryGroup.SEQUENCE_NAME);
        return categoryGroupRepository.insert(transactionGroup);
    }

    public CategoryGroup update(CategoryGroup group){
        Optional<CategoryGroup> optionalTransactionGroup = categoryGroupRepository.findById(group.getId());
        if(optionalTransactionGroup.isPresent()){
            CategoryGroup update = optionalTransactionGroup.get();
            update.setCode(group.getCode());
            update.setName(group.getName());
            update.setIcon(group.getIcon());
            update.setDesc(group.getDesc());
            return categoryGroupRepository.save(update);
        }
        return  null;
    }

    public CategoryGroup findById(Long id){
        return categoryGroupRepository.findById(id).orElse(null);
    }

    public CategoryGroup delete(Long id){
        Optional<CategoryGroup> optionalTransactionGroup = categoryGroupRepository.findById(id);
        if(optionalTransactionGroup.isPresent()){
            CategoryGroup update = optionalTransactionGroup.get();
            update.setStatus(0);
            return categoryGroupRepository.save(update);
        }
        return  null;
    }

    public List<CategoryGroup> findAll()
    {
        return categoryGroupRepository.findAll();
    }

//    public List<CategoryGroup> findByUserId(Long userID){
//        return transactionGroupRepository.findAllByUserID(userID);
//    }

    public CategoryGroup addCategory(Long id, Category category){
        Optional<CategoryGroup> categoryGroupOptional = categoryGroupRepository.findById(id);
        if (categoryGroupOptional.isPresent()) {
            CategoryGroup categoryGroupFound = null;

            categoryGroupFound = categoryGroupOptional.get();
            Long categoryID = sequenceGeneratorService.generateSequence(Category.SEQUENCE_NAME);
            category.setId(categoryID);

            List<Category> categoryList = categoryGroupFound.getCategoryList();
            categoryList.add(category);
            categoryGroupFound.setCategoryList(categoryList);
            return categoryGroupRepository.save(categoryGroupFound);
        }
        return null;
    }

    public CategoryGroup updateCategory(Long idGroup, Category category){
        Optional<CategoryGroup> categoryGroupOptional = categoryGroupRepository.findById(idGroup);
        if (categoryGroupOptional.isPresent()) {
            CategoryGroup categoryGroupFound = null;

            categoryGroupFound = categoryGroupOptional.get();
            Long categoryID = sequenceGeneratorService.generateSequence(Category.SEQUENCE_NAME);
            category.setId(categoryID);

            List<Category> categoryList = categoryGroupFound.getCategoryList();
            int index = 0;
            for(Category item: categoryList){
                if(category.getId() == item.getId()){
                    break;
                }
                index++;
            }
            categoryList.get(index).setId(category.getId());
            categoryList.get(index).setName(category.getName());
            categoryList.get(index).setActive(category.isActive());
            categoryList.get(index).setIcon(category.getIcon());
            categoryList.get(index).setUserID(category.getUserID());
            categoryGroupFound.setCategoryList(categoryList);
            return categoryGroupRepository.save(categoryGroupFound);
        }
        return null;
    }


    public CategoryGroup deleteCategory(Long idGroup, Long categoryID){
        Optional<CategoryGroup> categoryGroupOptional = categoryGroupRepository.findById(idGroup);
        if (categoryGroupOptional.isPresent()) {
            CategoryGroup categoryGroupFound = null;

            categoryGroupFound = categoryGroupOptional.get();

            List<Category> categoryList = categoryGroupFound.getCategoryList();
            int index = 0;
            for(Category item: categoryList){
                if(categoryID == item.getId()){
                    break;
                }
                index++;
            }
            categoryList.get(index).setActive(false);
            categoryGroupFound.setCategoryList(categoryList);
            return categoryGroupRepository.save(categoryGroupFound);
        }
        return null;
    }

    public Category findCategoryById(Long categoryId) {
        Query query = new Query(Criteria.where("categoryList").elemMatch(Criteria.where("id").is(categoryId)));
        query.fields().elemMatch("categoryList", Criteria.where("id").is(categoryId));

        return mongoTemplate.findOne(query, CategoryGroup.class).getCategoryList().get(0);
    }

    public void updateCategory2(Long categoryId, Category updatedCategory) {
        Query query = new Query(Criteria.where("categoryList.id").is(categoryId));
        Update update = new Update().set("categoryList.$", updatedCategory);
        mongoTemplate.updateFirst(query, update, CategoryGroup.class);
    }

}
