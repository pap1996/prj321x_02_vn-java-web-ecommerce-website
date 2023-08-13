package com.ecommerce.prj321x.application.controller;

import com.ecommerce.prj321x.application.dto.ProvinceDto;
import com.ecommerce.prj321x.application.service.AddressService;
import com.ecommerce.prj321x.domain.entity.address.AddressProvince;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/address-lookup")
@CrossOrigin(value = "*")
public class AddressController {

    @Autowired
    AddressService addressService;

    @GetMapping("")
    ResponseEntity<List<ProvinceDto>> lookupAllProvince() {
        return ResponseEntity.ok(addressService.retrieveAllAddress());
    }
    @GetMapping("/{province}")
    ResponseEntity<AddressProvince> lookupProvince(@PathVariable(name = "province") String province) {
        return ResponseEntity.ok(addressService.retrieveAddress(province));
    }

}
