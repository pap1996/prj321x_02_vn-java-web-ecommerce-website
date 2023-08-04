package com.ecommerce.prj321x.application.controller;

import com.ecommerce.prj321x.application.dto.ProductDto;
import com.ecommerce.prj321x.application.service.ProductService;
import com.ecommerce.prj321x.domain.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin(value = "*")
public class ProductController {

    @Autowired
    ProductService productService;
    @GetMapping("/all")
    ResponseEntity<ProductDto> getProduct(@RequestParam(name = "page", required = false, defaultValue = "0") int page,
                                          @RequestParam(name = "rows", required = false, defaultValue = "5") int rows,
                                          @RequestParam(name = "category", required = false, defaultValue = "cellphone") String category,
                                          @RequestParam(name = "searchTerm", required = false, defaultValue = "") String searchTerm) {
        return ResponseEntity.ok(productService.getProduct(page, rows, category, searchTerm));
    }
}
