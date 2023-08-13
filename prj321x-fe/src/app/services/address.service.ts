import { Injectable, OnInit } from '@angular/core';
import { Province } from '../model/address';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class AddressService implements OnInit {
  address$: BehaviorSubject<Province[]> = new BehaviorSubject([
    {},
  ] as Province[]);
  selectedProvince$: BehaviorSubject<Province> = new BehaviorSubject(
    {} as Province
  );
  constructor(private http: HttpClient) {
    console.log('Address Service construct!');
    this.getAllProvince();
  }

  // service dont have its lifecycle!!!!
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Address Service init!');
    this.getAllProvince();
  }

  getProvinceDetail(province: string) {
    return this.http
      .get<Province>(Env.serverUrl + Env.FETCH_ADDRESS + `/${province}`)
      .subscribe((data) => {
        this.selectedProvince$.next(data);

        console.log('After next subject: ', this.selectedProvince$.getValue());
      });
  }

  getAllProvince() {
    return this.http
      .get<Province[]>(Env.serverUrl + Env.FETCH_ADDRESS)
      .subscribe((data) => {
        this.address$.next(data);
      });
  }
}
