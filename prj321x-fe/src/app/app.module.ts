import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { PrimengModule } from './primeng/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemlistComponent } from './maincomponents/itemlist/itemlist.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemdetailComponent } from './maincomponents/itemdetail/itemdetail.component';
import { CreateorderComponent } from './maincomponents/createorder/createorder.component';
import { CartService } from './services/cart.service';
import { DiscountcodeService } from './services/discountcode.service';
import { AddressService } from './services/address.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemlistComponent,
    ItemdetailComponent,
    CreateorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ProductService, CartService, DiscountcodeService, AddressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
