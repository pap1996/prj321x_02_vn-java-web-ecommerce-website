package com.ecommerce.prj321x.application.service;

import com.ecommerce.prj321x.application.dto.ProvinceDto;
import com.ecommerce.prj321x.domain.entity.address.AddressProvince;

import java.util.List;

public interface AddressService {

    AddressProvince retrieveAddress(String province);

    List<ProvinceDto> retrieveAllAddress();
}
