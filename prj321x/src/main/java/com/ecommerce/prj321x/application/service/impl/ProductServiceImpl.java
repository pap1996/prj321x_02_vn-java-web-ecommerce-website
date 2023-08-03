package com.ecommerce.prj321x.application.service.impl;

import com.ecommerce.prj321x.application.service.ProductService;
import com.ecommerce.prj321x.domain.entity.Product;
import com.ecommerce.prj321x.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;
    @Override
    public List<Product> getProduct() {
        return productRepository.findAll();
    }
}
