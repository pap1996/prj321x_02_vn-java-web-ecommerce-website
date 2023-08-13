package com.ecommerce.prj321x.application.dto;


import com.ecommerce.prj321x.domain.entity.address.AddressProvince;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressDto {
    AddressProvince province;
}
