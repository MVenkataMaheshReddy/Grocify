package com.example.smartgrocery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartgrocery.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA automatically writes the SQL for this based on the method name
    User findByUsername(String username);
}