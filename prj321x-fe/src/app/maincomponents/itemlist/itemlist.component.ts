import { Product } from './../../model/product';
import { Observable } from 'rxjs';

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PaginatorState } from 'primeng/paginator/paginator.interface';
import { DataView, DataViewLayoutOptions } from 'primeng/dataview';
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

  constructor(private productService: ProductService) {
    this.productService.products$.subscribe((productDto) => {
      console.log('Change log!');
      this.products = productDto.productList;
      this.totalRecords = productDto.totalRecords;
      // this.dataView.value = productDto.productList;
      // console.log('Dataview data list: ', this.dataView.value);
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getAllProducts();
  }

  onPageChange(event: PaginatorState) {
    console.log('On change log event: ', event);
    this.first = event.first ? event.first : 0;
    this.rows = event.rows ? event.rows : 5;

    this.productService.page = event.page ? event.page : 0;
    this.productService.rows = event.rows ? event.rows : 5;
    this.productService.getSelectedProducts();

    // this.productService.products$.subscribe((productDto) => {
    //   console.log('Change log!');
    //   this.products = productDto.productList;
    //   this.totalRecords = productDto.totalRecords;
    // });
  }
}
