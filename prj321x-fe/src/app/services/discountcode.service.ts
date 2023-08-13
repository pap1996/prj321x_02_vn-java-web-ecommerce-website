import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class DiscountcodeService {
  constructor(private http: HttpClient) {}

  checkAvailableCode(code: string): Observable<boolean> {
    return this.http.get<boolean>(
      Env.serverUrl + Env.FETCH_DISCOUNT_CODE + `?code=${code}`
    );
  }
}
