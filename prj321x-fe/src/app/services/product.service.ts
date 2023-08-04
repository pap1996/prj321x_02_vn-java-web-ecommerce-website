import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product, ProductDto } from '../model/product';
import { Env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // search criteria
  searchTerm: String = '';
  category: String = 'cellphone';
  page: number = 0;
  rows: number = 6;

  products$: Observable<Product[]> = new Observable();

  constructor(private http: HttpClient) {
    this.getAllProducts();
    this.products$.subscribe((productList) => {
      console.log(productList);
    });
  }

  getAllProducts(): Observable<ProductDto> {
    console.log('Get all products!!!');
    return this.http.get<ProductDto>(Env.serverUrl + Env.FETCH_PRODUCT);
  }

  getSelectedProducts(): Observable<ProductDto> {
    console.log('Get selected products!!!');
    return this.http.get<ProductDto>(
      Env.serverUrl +
        Env.FETCH_PRODUCT +
        `?page=${this.page}` +
        `&rows=${this.rows}` +
        `&category=${this.category}` +
        `&searchTerm=${this.searchTerm}`
    );
  }
}
