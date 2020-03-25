package com.codesquad.signup;

import com.codesquad.signup.domain.User;
import com.codesquad.signup.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;


@RestController
public class HomeController {
    private Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("hello")
    public User index() {

        User user = new User("zmdk1127@naver.com", "jun", LocalDate.now());
        userRepository.save(user);
        logger.info("user : {}", user);

        return user;
    }
}

