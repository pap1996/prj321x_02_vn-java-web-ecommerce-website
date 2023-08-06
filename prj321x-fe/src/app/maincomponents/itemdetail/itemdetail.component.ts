import { CartItem } from './../../model/cart';
import { Product } from './../../model/product';
import { CartService } from './../../services/cart.service';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css'],
})
export class ItemdetailComponent {
  selectProduct: Subject<Product> = new Subject();
  selectProduct$: Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    let productId = this.route.snapshot.paramMap.get('productId');
    console.log('selected ProductId: ', productId);
    productId = productId ? productId : '';

    this.productService.getProductById(productId).subscribe((product) => {
      this.selectProduct$ = product;
      this.selectProduct.next(product);
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.productService.getProductById(productId).subscribe((product) => {
    //   this.selectProduct = product;
    //   this.selectProduct.productDes = product.productDes.replace(/\r/g, '\n');
    //   console.log('Product selected: ', this.selectProduct);
    // });
  }

  addToCart() {
    const addedCartItem: CartItem = {
      product: this.selectProduct$,
      quantity: 1,
    } as CartItem;
    this.cartService.addCartItem(addedCartItem);
  }
}
