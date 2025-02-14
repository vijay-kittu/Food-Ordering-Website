package com.food_order.FoodOrderWebsite.service;

import com.food_order.FoodOrderWebsite.dao.UserRepository;
import com.food_order.FoodOrderWebsite.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        if(userRepository.existsByUserName(user.getUserName())){
            throw new RuntimeException("User already exists!");
        }

        return userRepository.save(user);

    }
}

