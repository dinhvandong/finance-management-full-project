package vn.vti.moneypig.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.moneypig.dto.ResponseObject;
import vn.vti.moneypig.jwt.JwtInterceptor;
import vn.vti.moneypig.models.Notification;
import vn.vti.moneypig.services.NotificationService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://150.95.110.230")
@RestController
@RequestMapping("/api/notification")
public class NotificationController {
    @Autowired
    NotificationService notificationService;
    @PostMapping("/findAll")
    public ResponseEntity<?> findAll(@RequestParam String token)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body
                    (new ResponseObject(201, null,"token jwt is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            List<Notification> response =  notificationService.findAll();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"success"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestBody Notification newNotification)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Notification response =  notificationService.insert(newNotification);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"notification is not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token, @RequestBody Notification updateNotification)
    {
        if(token.isBlank())
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            Notification response =  notificationService.update(updateNotification);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"notification is not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String token, @RequestParam Long id){
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            Optional<Notification> optional = notificationService.findById(id);
            if(optional.isPresent()){
                Notification foundNotification = optional.get();
                foundNotification.setStatus(0);
                Notification response =  notificationService.update(foundNotification);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"notification is not exist"));
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(202, null,"notification is not exist"));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"notification is not exist"));
        }
    }

}
