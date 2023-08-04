package com.ecommerce.prj321x.application.dto;

import com.ecommerce.prj321x.domain.entity.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProductDto {
    List<Product> productList;
    long totalRecords;
}
