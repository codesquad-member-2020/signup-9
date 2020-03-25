package com.codesquad.signup.domain;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    @Query("select * from User u where u.user_Id = :userId")
    Optional<User> findByUserId(@Param("userId") String userId);
}
