import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public selectedCategory: any;
  public categories: any[] = [];
  public searchKeyword: string = '';
  public headerItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categories = ['cellphone', 'laptop', 'household electronics'];
    this.headerItems = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: '/home',
      },
      {
        label: 'Products',
        icon: PrimeIcons.LIST,
        routerLink: '/products',
      },
      {
        label: 'About Us',
        icon: PrimeIcons.INFO,
        routerLink: 'about-us',
      },
    ];

    console.log('categories: ', this.categories);
  }
}
