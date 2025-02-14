package com.food_order.FoodOrderWebsite.entity;

import jakarta.persistence.*;
import jakarta.validation.Validation;
import jakarta.validation.constraints.Email;

@Entity
@Table(name="food_order")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="username", nullable = false, unique = true)
    private String userName;

    @Column(name="email", nullable = false, unique = true)
    @Email(message="Invalid email format")
    private String email;

    public User(){

    }

    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public @Email(message = "Invalid email format") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Invalid email format") String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
