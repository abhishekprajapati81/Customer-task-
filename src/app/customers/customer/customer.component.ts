import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerFacade } from 'src/app/store/customer.facade';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerFacade = inject(CustomerFacade);

  ngOnInit(): void {
    this.customerFacade.getAllCustomer();
  }
}
