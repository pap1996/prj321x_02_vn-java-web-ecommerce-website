import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, share } from 'rxjs';
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

  // can when use only subject????
  productSubject: Subject<ProductDto> = new Subject();
  products$: Observable<ProductDto> = this.productSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllProducts();
    this.products$.subscribe((productList) => {
      console.log(productList);
    });
  }

  getAllProducts(): void {
    console.log('Get all products!!!');
    this.http
      .get<ProductDto>(Env.serverUrl + Env.FETCH_PRODUCT_LIST)
      .subscribe((data) => {
        this.productSubject.next(data);
      });
  }

  getSelectedProducts(): void {
    console.log('Get selected products!!!');
    console.log('This at the moment:', this);
    this.http
      .get<ProductDto>(
        Env.serverUrl +
          Env.FETCH_PRODUCT_LIST +
          `?page=${this.page}` +
          `&rows=${this.rows}` +
          `&category=${this.category}` +
          `&searchTerm=${this.searchTerm}`
      )
      .subscribe((data) => {
        this.productSubject.next(data);
      });
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(
      Env.serverUrl + Env.FETCH_PRODUCT + `/${productId}`
    );
  }
}
