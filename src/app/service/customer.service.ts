import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../modal/customer.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/Customer';

  showData() {
    return this.http.get<Customer[]>(this.url);
  }

  getdata(id: number): Observable<Customer | undefined> {
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  addNewCustomer(getData: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, getData);
  }

  updateCustomer(id: number, changes: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.url}/${id}`, changes);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.url}/${id}`);
  }
}
