package com.ecommerce.prj321x.domain.repository;

import com.ecommerce.prj321x.domain.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    List<Product> findAll();
}
