package com.ecommerce.prj321x.application.controller;

import com.ecommerce.prj321x.application.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/discount-code")
@CrossOrigin(value = "*")
public class DiscountController {

    @Autowired
    ProductService productService;
    @GetMapping
    ResponseEntity<Boolean> checkAvailableCode(@RequestParam(name = "code", required = true) String discountCode) {
        if ("ABC123".equalsIgnoreCase(discountCode)) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

}
