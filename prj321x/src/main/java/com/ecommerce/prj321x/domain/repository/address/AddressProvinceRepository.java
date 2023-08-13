package com.ecommerce.prj321x.domain.repository.address;

import com.ecommerce.prj321x.domain.entity.address.AddressProvince;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AddressProvinceRepository extends CrudRepository<AddressProvince, String> {

    List<AddressProvince> findAll();
}
