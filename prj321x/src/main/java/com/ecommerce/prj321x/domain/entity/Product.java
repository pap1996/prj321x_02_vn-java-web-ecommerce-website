package com.ecommerce.prj321x.domain.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "products")
public class Product {

    @Id
    @Column(name = "product_id")
    private long productId;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_des")
    private String productDes;
    @Column(name = "product_price")
    private BigDecimal productPrice;
    @Column(name = "product_img_source")
    private String productImgSource;
    @Column(name = "product_type")
    private String productType;
    @Column(name = "product_brand")
    private String productBrand;
}
