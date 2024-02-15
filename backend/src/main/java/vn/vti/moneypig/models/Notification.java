package vn.vti.moneypig.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notifications")
public class Notification {
    @Id
    private  Long id;
    @Transient
    public static final String SEQUENCE_NAME = "notification_sequence";
    private String title;
    private String content;
    private int priority;
    private int status;
    private int type;
    private Long senderId;
    private String senderAccount;
    private  Long receivedId;
    private String receivedAccount;
    private  Long createdDate;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public int getPriority() {
        return priority;
    }
    public void setPriority(int priority) {
        this.priority = priority;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
    public Long getSenderId() {
        return senderId;
    }
    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }
    public String getSenderAccount() {
        return senderAccount;
    }
    public void setSenderAccount(String senderAccount) {
        this.senderAccount = senderAccount;
    }
    public Long getReceivedId() {
        return receivedId;
    }
    public void setReceivedId(Long receivedId) {
        this.receivedId = receivedId;
    }
    public String getReceivedAccount() {
        return receivedAccount;
    }
    public void setReceivedAccount(String receivedAccount) {
        this.receivedAccount = receivedAccount;
    }
    public Long getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(Long createdDate) {
        this.createdDate = createdDate;
    }
}
