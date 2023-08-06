package com.ecommerce.prj321x.application.service.impl;

import com.ecommerce.prj321x.application.dto.ProductDto;
import com.ecommerce.prj321x.application.service.ProductService;
import com.ecommerce.prj321x.domain.entity.Product;
import com.ecommerce.prj321x.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;
    @Override
    public ProductDto getProductList(int page, int rows, String category, String searchTerm) {

        ProductDto productDto = ProductDto.builder().build();
        Pageable pageable = PageRequest.of(page, rows);

        Page<Product> result = productRepository.findWithParam(pageable, category, searchTerm);

        productDto.setProductList(result.getContent());
        productDto.setTotalRecords(result.getTotalElements());
        return  productDto;
    }

    @Override
    public Product getProduct(Long productId) {
        return productRepository.findById(productId).orElseThrow();
    }
}
