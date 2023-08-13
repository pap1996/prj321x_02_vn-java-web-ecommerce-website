import Big from 'big.js';

export interface Ward {
  code: string;
  ward: string;
  wardDetail: string;
}

export interface District {
  addressWards: Ward[];
  code: string;
  district: string;
}

export interface Province {
  addressDistricts: District[];
  code: string;
  province: string;
}
