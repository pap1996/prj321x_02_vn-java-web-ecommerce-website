import { Cart, CartItem } from './../../model/cart';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Big from 'big.js';
import { ChipsAddEvent } from 'primeng/chips';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { District, Province, Ward } from 'src/app/model/address';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { DiscountcodeService } from 'src/app/services/discountcode.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css'],
})
export class CreateorderComponent implements OnInit {
  cartItems: CartItem[];

  provinces: Province[] = [];
  districts: District[] = [];
  wards: Ward[] = [];

  selectedProvince: Province;

  orderForm: FormGroup;
  constructor(
    private cartService: CartService,
    private discountService: DiscountcodeService,
    private fb: FormBuilder,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // handle cart
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart.cartItems;
    });

    if (localStorage.getItem('cart')) {
      const cartString = localStorage.getItem('cart')
        ? localStorage.getItem('cart')
        : '{}';
      const cart = JSON.parse(cartString!) as Cart;
      this.cartItems = cart.cartItems;
      console.log('Load cart info from local storage: ', this.cartItems);
    }

    // handle form
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      customerDetailAddress: ['', Validators.required],
      addressProvince: ['', Validators.required],
      addressDistrict: ['', Validators.required],
      addressWard: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('0[0-9]{9}')]],
      discountCode: [''],
    });

    this.orderForm.valueChanges.subscribe((data) => {
      localStorage.setItem('orderForm', JSON.stringify(data));
    });

    if (localStorage.getItem('orderForm')) {
      const value = localStorage.getItem('orderForm')
        ? localStorage.getItem('orderForm')
        : '{}';
      const objectForm = JSON.parse(value!);
      this.orderForm.setValue(objectForm);
      this.markFormControlsAsTouched(this.orderForm);
      console.log('Load order form info from local storage: ', this.orderForm);
    }

    // handle address
    this.addressService.address$.subscribe((data) => {
      this.provinces = data;
    });

    this.addressService.selectedProvince$.subscribe((data) => {
      this.selectedProvince = data as Province;
      console.log('New data add: ', this.selectedProvince);
      this.districts = this.selectedProvince.addressDistricts;
      console.log('Districts for selected province: ', this.districts);
      console.log('Why undefined: ', this.selectedProvince.addressDistricts);
    });
  }

  markFormControlsAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control!.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormControlsAsTouched(control);
      }
    });
  }

  getTotalItems(): number {
    return this.cartService.cart$
      .getValue()
      .cartItems.map((item) => item.quantity)
      .reduce((pre, cur, curInd, arr) => pre + cur, 0);
  }
  getTotalOrderAmount(): Big {
    return this.cartService.cart$
      .getValue()
      .cartItems.map((item) =>
        new Big(item.product.productPrice).times(item.quantity)
      )
      .reduce((pre, cur, curInd, arr) => pre.add(cur), new Big(0));
  }

  getAmountOfItem(item: CartItem): Big {
    return new Big(item.product.productPrice).times(item.quantity);
  }

  get customerName() {
    return this.orderForm.get('customerName') as FormControl;
  }

  get customerDetailAddress() {
    return this.orderForm.get('customerDetailAddress') as FormControl;
  }

  get phoneNumber() {
    return this.orderForm.get('phoneNumber') as FormControl;
  }

  get discountCode() {
    return this.orderForm.get('discountCode') as FormControl;
  }

  get addressDistrict() {
    console.log('province to show: ', this.selectedProvince);
    console.log('list to show: ', this.selectedProvince.addressDistricts);
    return this.selectedProvince.addressDistricts as District[];
  }

  checkAvailableCode(event: ChipsAddEvent) {
    const code = event.value;
    // console.log(event);
    // console.log(this.discountCode.value);
    // const valueArray = this.discountCode.value as Array<string>;
    // const countCode = valueArray.filter((item) => item === code).length;

    // if (countCode > 1) {
    //   this.discountCode.setErrors({ invalidCode: true });
    //   return;
    // }
    this.discountService.checkAvailableCode(code).subscribe((result) => {
      if (!result) {
        this.discountCode.setErrors({ invalidCode: true });
      }
    });
  }

  addItem(event: MouseEvent, item: CartItem) {
    console.log('Add item from create order component!', event, item);
    const newItem = Object.assign(
      {},
      { product: item.product, quantity: 1 }
    ) as CartItem;
    this.cartService.addCartItem(newItem);
  }

  deleteItem(event: MouseEvent, item: CartItem) {
    console.log('Add item from create order component!', event, item);
    const newItem = Object.assign(
      {},
      { product: item.product, quantity: 1 }
    ) as CartItem;
    this.cartService.deleteCartItem(newItem);
  }

  minusItem(event: MouseEvent, item: CartItem) {
    console.log('Add item from create order component!', event, item);
    const newItem = Object.assign(
      {},
      { product: item.product, quantity: -1 }
    ) as CartItem;
    this.cartService.addCartItem(newItem);
  }

  retrieveDistrict(event: DropdownChangeEvent) {
    this.addressService.getProvinceDetail(event.value);
  }

  retrieveWard(event: DropdownChangeEvent) {
    const districtCode = event.value;
    this.wards = this.selectedProvince.addressDistricts.find(
      (district) => district.code === districtCode
    )?.addressWards!;

    if (this.wards.length === 0) {
      this.wards = [
        {
          code: '9999',
          ward: 'Không có xã hành chính',
          wardDetail: 'Không có xã hành chính',
        },
      ];
    }
  }
}
