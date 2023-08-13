package com.ecommerce.prj321x.domain.entity.address;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@Table(name = "address_ward")
@NoArgsConstructor
@AllArgsConstructor
public class AddressWard {

    @Id
    @Column(name = "code")
    private String code;
    @Column(name = "ward")
    private String ward;
    @Column(name = "ward_detail")
    private String wardDetail;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_code")
//    @JsonIgnore
    @JsonBackReference
    private AddressDistrict addressDistrict;

}
