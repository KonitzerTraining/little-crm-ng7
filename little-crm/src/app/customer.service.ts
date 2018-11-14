import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return this.http.get("http://localhost:3000/customers");
  }

  public deleteCustomer(id: number) {
    return this.http.delete(`http://localhost:3000/customers/${id}`);
  }
}
