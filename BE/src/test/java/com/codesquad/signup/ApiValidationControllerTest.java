package com.codesquad.signup;

import com.codesquad.signup.domain.UserRepository;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ApiValidationControllerTest {

    private Logger logger = LoggerFactory.getLogger(ApiValidationControllerTest.class);

    @Autowired
    private UserRepository userRepository;

    @Test
    void findByUserIdTest() {
        Optional<String> userId = userRepository.findByUserId("guswns1659");
        assertThat(userId).isNotEmpty();
        logger.info("userId : {}", userId);
    }

    @Test
    void findByEmailTest() {
        Optional<String> email = userRepository.findByEmail("zmdk1127@naver.com");
        assertThat(email).isNotEmpty();
        logger.info("userId : {}", email);
    }
}
