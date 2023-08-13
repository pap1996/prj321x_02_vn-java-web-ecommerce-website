package com.ecommerce.prj321x.domain.repository.address;

import com.ecommerce.prj321x.domain.entity.address.AddressWard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AddressWardRepository extends CrudRepository<AddressWard, String> {
}
