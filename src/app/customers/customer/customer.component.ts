import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerFacade } from 'src/app/store/customer.facade';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(public customerFacade: CustomerFacade, private router: Router) {}

  ngOnInit(): void {
    this.customerFacade.getAllCustomer();
  }
}
