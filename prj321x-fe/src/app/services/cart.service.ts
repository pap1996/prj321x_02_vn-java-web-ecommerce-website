import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject({
    cartItems: [],
  } as Cart);
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  addCartItem(cartItem: CartItem) {
    console.log('Before add item to cart: ', this.cart$.getValue());
    const existedCart = this.cart$.getValue();

    const existingCartItem = existedCart.cartItems.find(
      (item) => item.product.productId === cartItem.product.productId
    );
    if (existingCartItem) {
      existingCartItem.quantity += cartItem.quantity;

      if (existingCartItem.quantity <= 0) {
        this.deleteCartItem(cartItem);
      }
    } else {
      existedCart.cartItems.push(cartItem);
    }
    this.cart$.next(existedCart);

    localStorage.setItem('cart', JSON.stringify(existedCart));

    console.log('After add item to cart: ', this.cart$.getValue());
  }

  deleteCartItem(cartItem: CartItem) {
    console.log('Before delete item to cart: ', this.cart$.getValue());
    const existedCart = this.cart$.getValue();

    const existingCartItem = existedCart.cartItems.find(
      (item) => item.product.productId === cartItem.product.productId
    );
    if (existingCartItem) {
      existedCart.cartItems = existedCart.cartItems.filter(
        (x) => x.product.productId != existingCartItem.product.productId
      );
    }
    this.cart$.next(existedCart);

    localStorage.setItem('cart', JSON.stringify(existedCart));

    console.log('After delete item to cart: ', this.cart$.getValue());
  }

  reloadCartFromLocalStorage(): void {
    console.log('Reload cart service');
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart')!) as Cart;
      this.cart$.next(cart);
    }
  }
}
