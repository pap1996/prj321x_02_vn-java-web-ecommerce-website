import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject({
    cartItems: [],
  } as Cart);
  constructor() {}

  addCartItem(cartItem: CartItem) {
    console.log('Before add item to cart: ', this.cart$.getValue());
    const existedCart = this.cart$.getValue();

    const existingCartItem = existedCart.cartItems.find(
      (item) => item.product.productId === cartItem.product.productId
    );
    if (existingCartItem) {
      existingCartItem.quantity += cartItem.quantity;
    } else {
      existedCart.cartItems.push(cartItem);
    }
    this.cart$.next(existedCart);

    console.log('After add item to cart: ', this.cart$.getValue());
  }
}
