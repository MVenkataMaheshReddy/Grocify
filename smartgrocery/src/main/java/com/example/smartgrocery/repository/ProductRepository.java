package com.example.smartgrocery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartgrocery.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // This interface allows us to Save, Delete, and Find products automatically
}
