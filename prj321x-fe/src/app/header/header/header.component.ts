import { CartService } from './../../services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public selectedCategory: any;
  public categories: any[] = [];
  public searchKeyword: string = '';
  public headerItems: MenuItem[] = [];
  public cartQuantity: number = 0;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categories = ['cellphone', 'laptop', 'household electronics'];
    this.headerItems = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: '/',
      },
      {
        label: 'Products',
        icon: PrimeIcons.LIST,
        routerLink: '/',
      },
      {
        label: 'About Us',
        icon: PrimeIcons.INFO,
        routerLink: '/',
      },
    ];

    console.log('categories: ', this.categories);

    this.cartService.cart$.subscribe((cart) => {
      this.cartQuantity = cart.cartItems
        .map((item) => item.quantity)
        .reduce((pre, cur, curInd, arr) => pre + cur, 0);
    });
  }

  onChange(event: DropdownChangeEvent) {
    console.log('Dropdown event:', event);
    this.productService.category = event.value;
    this.productService.getSelectedProducts();
    this.router.navigate(['']);
  }

  onSearch(event: MouseEvent) {
    this.productService.searchTerm = this.searchKeyword;
    this.productService.getSelectedProducts();
    this.router.navigate(['']);
  }

  createOrder() {
    this.router.navigate(['create-order']);
  }
}
