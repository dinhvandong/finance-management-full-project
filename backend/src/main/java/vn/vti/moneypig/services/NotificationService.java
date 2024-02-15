package vn.vti.moneypig.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vti.moneypig.models.Notification;
import vn.vti.moneypig.repositories.NotificationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    NotificationRepository notificationRepository;

    public Notification insert(Notification notification)
    {
        return  notificationRepository.insert(notification);
    }

    public List<Notification> findAll()
    {
        return  notificationRepository.findAll();
    }

    public Optional<Notification> findById(Long id){
        return  notificationRepository.findById(id);
    }

    public List<Notification> findAllBySenderID(Long senderID)
    {
        return  notificationRepository.findAllBySenderId(senderID);
    }

    public List<Notification> findAllByReceivedID(Long receivedID)
    {
        return  notificationRepository.findAllByReceivedId(receivedID);
    }
    public Notification update(Notification notification)
    {
        Optional<Notification> optionalNotification =
                notificationRepository.findById(notification.getId());
        if(optionalNotification.isEmpty()) {
            return null;
        }
        return  notificationRepository.save(notification);
    }
}
