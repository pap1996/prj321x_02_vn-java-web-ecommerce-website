package com.ecommerce.prj321x.application.service;

import com.ecommerce.prj321x.application.dto.ProductDto;



public interface ProductService {


    ProductDto getProduct(int page, int rows, String category, String searchTerm);
}
