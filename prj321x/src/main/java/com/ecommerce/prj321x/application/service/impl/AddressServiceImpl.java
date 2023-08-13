package com.ecommerce.prj321x.application.service.impl;

import com.ecommerce.prj321x.application.dto.DtoMapper;
import com.ecommerce.prj321x.application.dto.ProvinceDto;
import com.ecommerce.prj321x.application.exception.AddressException;
import com.ecommerce.prj321x.application.service.AddressService;
import com.ecommerce.prj321x.domain.entity.address.AddressProvince;
import com.ecommerce.prj321x.domain.repository.address.AddressProvinceRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AddressServiceImpl implements AddressService {
    @Autowired
    AddressProvinceRepository provinceRepository;



    @Override
    public AddressProvince retrieveAddress(String province) {

        Optional<AddressProvince> provinceOptional = provinceRepository.findById(province);
        if(provinceOptional.isEmpty()) {
            throw new AddressException("001", "Not found province");
        }

//        AddressDto addressDto = AddressDto.builder()
//                .province(provinceOptional.get())
//                .build();
        return provinceOptional.get();
    }

    @Override
    public List<ProvinceDto> retrieveAllAddress() {

        List<AddressProvince> addressProvinces = provinceRepository.findAll();
        return Mappers.getMapper(DtoMapper.class).toProvinceDtoList(addressProvinces);
    }
}
