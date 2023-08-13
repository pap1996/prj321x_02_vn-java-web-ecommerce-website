package com.ecommerce.prj321x.application.dto;


import com.ecommerce.prj321x.domain.entity.address.AddressProvince;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DtoMapper {


    ProvinceDto toProvinceDto(AddressProvince addressProvince);

    List<ProvinceDto> toProvinceDtoList(List<AddressProvince> addressProvinceList);
}
