package vn.vti.moneypig.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.moneypig.dto.ResponseObject;
import vn.vti.moneypig.jwt.JwtInterceptor;
import vn.vti.moneypig.models.Category;
import vn.vti.moneypig.models.CategoryGroup;
import vn.vti.moneypig.models.Transaction;
import vn.vti.moneypig.services.CategoryGroupService;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    CategoryGroupService categoryGroupService;
    @PostMapping("/findAll")
    public ResponseEntity<?> findAll(@RequestParam String token)
    {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"category not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, categoryGroupService.findAll(),"success"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"category not exist"));
        }

    }
    @PostMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam String token, @RequestParam Long id)
    {
        Category category = categoryGroupService.findCategoryById(id);
        if(category!= null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, categoryGroupService.findCategoryById(id),"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"fail"));
        }
    }
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token,  @RequestBody Category category)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"transaction is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Category response =  categoryGroupService.findCategoryById(category.getId());
            if(response!= null)
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"category is not exist"));
            }
            else
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"category is not exist"));
            }
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"category is not exist"));
        }
    }
    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String token)
    {
        return  null;
    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token)
    {
        return  null;
    }
}
