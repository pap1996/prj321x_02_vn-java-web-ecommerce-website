import Big from 'big.js';

export interface Product {
  productId: number;
  productName: string;
  productDes: string;
  productPrice: Big;
  productImgSource: string;
  productType: string;
  productBrand: string;
}

export interface ProductDto {
  productList: Product[];
  totalRecords: number;
}
