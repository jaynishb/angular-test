import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomers(): Observable<any> {
    return this.http.get(`${BASE_URL}/customers`);
  }

  getOrders(customerID, filter): Observable<any> {
    return this.http.get(`${BASE_URL}/orders/${customerID}`, {
      params: filter
    });
  }
}
