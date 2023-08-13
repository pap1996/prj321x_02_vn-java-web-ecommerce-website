package com.ecommerce.prj321x.application.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProvinceDto {
    private String code;
    private String province;
}
