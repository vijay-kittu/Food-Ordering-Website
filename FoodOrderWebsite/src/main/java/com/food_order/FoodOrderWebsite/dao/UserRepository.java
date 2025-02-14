package com.food_order.FoodOrderWebsite.dao;

import com.food_order.FoodOrderWebsite.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByUserName(String userName);

    User findByUserName(String userName);
}
