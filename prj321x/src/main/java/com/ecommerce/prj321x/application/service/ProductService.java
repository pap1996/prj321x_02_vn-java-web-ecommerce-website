package com.ecommerce.prj321x.application.service;

import com.ecommerce.prj321x.application.dto.ProductDto;
import com.ecommerce.prj321x.domain.entity.Product;


public interface ProductService {


    ProductDto getProductList(int page, int rows, String category, String searchTerm);
    Product getProduct(Long productId);
}
