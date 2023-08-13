package com.ecommerce.prj321x.domain.repository.address;

import com.ecommerce.prj321x.domain.entity.address.AddressDistrict;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AddressDistrictRepository extends CrudRepository<AddressDistrict, String> {
}
