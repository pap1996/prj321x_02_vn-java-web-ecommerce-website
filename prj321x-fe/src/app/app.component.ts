import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prj321x-fe';

  constructor(private cartService: CartService) {
    cartService.reloadCartFromLocalStorage();
  }
}
