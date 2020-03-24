package com.codesquad.signup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;

@SpringBootApplication
public class SignupApplication {

    public static void main(String[] args) {
        SpringApplication.run(SignupApplication.class, args);
    }

}
