package com.codesquad.signup;

import com.codesquad.signup.domain.User;
import com.codesquad.signup.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = SimpleJdbcConfig.class)
@EnableJdbcRepositories
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepo;

    private Logger logger = LoggerFactory.getLogger(UserRepositoryTest.class);

    @Test
    public void createUserTest() {
        User user = new User();
        user.createdDate = LocalDate.now();
        user.name = "Hoyoung";
        user.email = "honux77@gmail.com";

        logger.debug("User before save: {}", user);

        User saved = userRepo.save(user);
        assertThat(saved.id).isNotNull();
        logger.debug("User after save: {}", saved);

        saved.name = "Hoyoung Jung";

        userRepo.save(saved);

        Optional<User> reloaded = userRepo.findById(saved.id);

        assertThat(reloaded).isNotEmpty();

        assertThat(reloaded.get().name).isEqualTo(saved.name);
        logger.debug("User after update: {}", reloaded.get());
    }
}
