import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customer: Customer = {
    id: 3,
    credit: 39,
    name: "Peter"
  };

  constructor() {
  }

  ngOnInit() {
  }

}
