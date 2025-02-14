package com.food_order.FoodOrderWebsite.controller;

import com.food_order.FoodOrderWebsite.dao.UserRepository;
import com.food_order.FoodOrderWebsite.entity.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

    /*

    */

    @Autowired
    public UserRepository userRepository;
    
    @GetMapping("/get/{email}")
    public ResponseEntity<Boolean> checkUserExists(@PathVariable String email) {
        boolean checkUser = userRepository.existsByEmail(email);
        return ResponseEntity.ok(checkUser);
    }
    @GetMapping("/get/username/{email}")
    public String sendUserName(@PathVariable String email) {
        User user = userRepository.findByEmail(email);
        return user != null ? user.getUserName() : null;
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User dbUser = userRepository.findByEmail(user.getEmail());

        if (dbUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        /*if (!dbUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }*/

        return ResponseEntity.ok("Login successful!");
    }

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {

        User newUser = userRepository.save(user);
        return newUser;
    }




}
