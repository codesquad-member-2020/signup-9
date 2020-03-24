package com.codesquad.signup;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@DataJdbcTest
public class CoffeeRepositoryTest {

    @Autowired
    CoffeeRepository coffeeRepository;

    @Autowired
    CafeRepository cafeRepository;

    @Test
    public void coffee_test() {
        Coffee coffee = new Coffee("mocha", 1200);
        coffeeRepository.save(coffee);
    }
}
