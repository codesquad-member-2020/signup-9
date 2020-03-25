package com.codesquad.signup.domain;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private Long id;
    private String userId;
    private String name;
    private String password;
    private String birthDate;
    private Integer gender;
    private String email;
    private String phoneNumber;
    private String favoriteOne;
    private String favoriteTwo;
    private String favoriteThree;

    public User(String userId, String name, String password,
                String birthDate, Integer gender, String email,
                String phoneNumber, String favoriteOne, String favoriteTwo,
                String favoriteThree) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.birthDate = birthDate;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.favoriteOne = favoriteOne;
        this.favoriteTwo = favoriteTwo;
        this.favoriteThree = favoriteThree;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFavoriteOne() {
        return favoriteOne;
    }

    public void setFavoriteOne(String favoriteOne) {
        this.favoriteOne = favoriteOne;
    }

    public String getFavoriteTwo() {
        return favoriteTwo;
    }

    public void setFavoriteTwo(String favoriteTwo) {
        this.favoriteTwo = favoriteTwo;
    }

    public String getFavoriteThree() {
        return favoriteThree;
    }

    public void setFavoriteThree(String favoriteThree) {
        this.favoriteThree = favoriteThree;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", birthDate=" + birthDate +
                ", gender=" + gender +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", favoriteOne='" + favoriteOne + '\'' +
                ", favoriteTwo='" + favoriteTwo + '\'' +
                ", favoriteThree='" + favoriteThree + '\'' +
                '}';
    }
}

