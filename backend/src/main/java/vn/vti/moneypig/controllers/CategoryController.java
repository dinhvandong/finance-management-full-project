package vn.vti.moneypig.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.moneypig.dto.ResponseObject;
import vn.vti.moneypig.jwt.JwtInterceptor;
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
    public ResponseEntity<?> findById(@RequestParam String token)
    {
        return  null;
    }
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token)
    {
        return  null;
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
