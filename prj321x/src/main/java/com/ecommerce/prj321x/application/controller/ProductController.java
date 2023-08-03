package com.ecommerce.prj321x.application.controller;

import com.ecommerce.prj321x.application.service.ProductService;
import com.ecommerce.prj321x.domain.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(name = "/product")
public class ProductController {

    @Autowired
    ProductService productService;
    @GetMapping("/all")
    ResponseEntity<List<Product>> getProduct() {
        return ResponseEntity.ok(productService.getProduct());
    }
}
