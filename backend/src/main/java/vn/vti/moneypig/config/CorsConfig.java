package vn.vti.moneypig.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://127.0.1:3000") // Replace with your React app's URL
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
//                .allowedHeaders("*");

//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000") // Replace with the allowed origin(s) for your frontend application
//                .allowedMethods("GET", "POST", "PUT", "DELETE") // Specify the allowed HTTP methods
//                .allowedHeaders("Origin", "Content-Type", "Accept", "Authorization") // Specify the allowed headers
//                .allowCredentials(true); // Allow credentials (e.g., cookies, authorization headers)
//
//        registry.addMapping("/api/user/findAll")
//                .allowedOrigins("http://localhost:3000") // Replace with the allowed origin(s) for this endpoint
//                .allowedMethods("GET") // Specify the allowed HTTP method(s) for this endpoint
//                .allowedHeaders("Origin", "Content-Type", "Accept", "Authorization") // Specify the allowed headers for this endpoint
//                .allowCredentials(true); // Allow credentials (e.g., cookies, authorization headers)

        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // Replace with the appropriate frontend URL or '*' to allow all origins
                .allowedMethods("*") // Allow all HTTP methods
                .allowedHeaders("*").allowCredentials(true); // Allow credentials (cookies, authorization header; // Allow all headers
    }
}
