package vn.vti.moneypig.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vn.vti.moneypig.models.Service;
import vn.vti.moneypig.models.User;
import vn.vti.moneypig.repositories.ServiceRepository;
import vn.vti.moneypig.repositories.UserRepository;
import vn.vti.moneypig.security.PasswordEncoder;

@Configuration
public class Database {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                User user = new User();
                user.setId(1L);
                user.setUsername("admin");
                user.setPassword(PasswordEncoder.getInstance().encodePassword("A123456a@"));
                user.setStatus(1);
                if(userRepository.findAll().isEmpty())
                    userRepository.insert(user);
//                if(serviceRepository.findAll().isEmpty()){
//                    Service service1 = new Service();
//                    service1.setId(1L);
//                    service1.setServiceCode("C-HA123");
//                    service1.setServiceName("ABC");
//                    service1.setServiceType("HHH");
//                    serviceRepository.insert(service1);
//                }
            }
        };
    }
    
}
