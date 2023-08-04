package com.ecommerce.prj321x.domain.repository;

import com.ecommerce.prj321x.domain.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    List<Product> findAll();
    @Query("select p from Product p where p.productType=?1 and p.productName like %?2%")
    Page<Product> findWithParam(Pageable pageable, String category, String searchTerm);
}
