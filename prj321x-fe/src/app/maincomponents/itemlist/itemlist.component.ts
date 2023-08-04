import { Product } from './../../model/product';
import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator/paginator.interface';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
})
export class ItemlistComponent {
  first: number = 1;
  rows: number = 5;
  totalRecords: number = 0;

  products: Product[] = [];

  layout: 'list' | 'grid' = 'grid';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getAllProducts().subscribe((productDto) => {
      console.log('Change log!');
      this.products = productDto.productList;
      this.totalRecords = productDto.totalRecords;
    });

    console.log('productList in itemlist component: ', this.products);
  }

  onPageChange(event: PaginatorState) {
    console.log('On change log event: ', event);
    this.first = event.first ? event.first : 0;
    this.rows = event.rows ? event.rows : 5;

    this.productService.page = event.page ? event.page : 0;
    this.productService.rows = event.rows ? event.rows : 5;
    this.productService.getSelectedProducts().subscribe((productDto) => {
      console.log('Change log!');
      this.products = productDto.productList;
      this.totalRecords = productDto.totalRecords;
    });
  }
}
