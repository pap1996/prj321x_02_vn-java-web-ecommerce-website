package com.ecommerce.prj321x.domain.entity.address;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "address_district")
@NoArgsConstructor
@AllArgsConstructor
public class AddressDistrict {

    @Id
    @Column(name = "code")
    private String code;
    @Column(name = "district")
    private String district;
    @Column(name = "district_detail")
    private String districtDetail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "province_code")
//    @JsonIgnore
    @JsonBackReference
    private AddressProvince addressProvince;

    @OneToMany(mappedBy = "addressDistrict", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<AddressWard> addressWards;

}
