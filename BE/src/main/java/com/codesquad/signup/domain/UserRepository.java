package com.codesquad.signup.domain;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
//    @Query("select * from User u where u.user_Id = :userId")
//    Optional<User> findByUserId(@Param("userId") String userId);
@Query("select USER_ID from User u where u.user_Id = :userId")
Optional<String> findByUserId(@Param("userId") String userId);

    @Query("select EMAIL from User u where u.email = :email")
    Optional<String> findByEmail(@Param("email") String email);

    @Query("select PHONE_NUMBER from User u where u.PHONE_NUMBER = :phoneNumber")
    Optional<String> findByPhoneNumber(@Param("phoneNumber") String phoneNumber);

    @Query("select PASSWORD from User u where u.PASSWORD = :password")
    Optional<String> findByPassword(@Param("password") String password);
}
