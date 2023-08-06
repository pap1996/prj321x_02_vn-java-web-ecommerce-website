package com.ecommerce.prj321x.application.service;

import com.ecommerce.prj321x.application.service.impl.ProductServiceImpl;
import com.ecommerce.prj321x.domain.entity.Product;
import com.ecommerce.prj321x.domain.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ProductServiceImplTest {

    @Mock
    ProductRepository productRepository;


    @InjectMocks
    ProductServiceImpl productService;

    @Test
    void test() {

        List<Product> productList = List.of(Product.builder()
                        .productName("Abc")
                .build());
        Page<Product> productPage = new PageImpl<>(productList);
        when(productRepository.findWithParam(any(), any(), any())).thenReturn(productPage);
        assertTrue(productService.getProductList(1, 2, "abc", "abc").getProductList().size() == 1);
    }
}
