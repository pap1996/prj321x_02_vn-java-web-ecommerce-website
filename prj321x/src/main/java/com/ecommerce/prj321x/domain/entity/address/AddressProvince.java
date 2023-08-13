package com.ecommerce.prj321x.domain.entity.address;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Builder
@Table(name = "address_province")
@NoArgsConstructor
@AllArgsConstructor
public class AddressProvince {

    @Id
    @Column(name = "code")
    private String code;
    @Column(name = "province")
    private String province;
    @OneToMany(mappedBy = "addressProvince", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<AddressDistrict> addressDistricts;
}
