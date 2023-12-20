import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/modal/customer.modal';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerFacade } from 'src/app/store/customer.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customerId: string | null | undefined;
  customer$!: Observable<Customer | undefined>;

  route = inject(ActivatedRoute);
  http = inject(CustomerService);
  location = inject(Location);
  customerFacade = inject(CustomerFacade);

  ngOnInit(): void {
    this.customerFacade.getAllCustomer();

    this.route.paramMap.subscribe((params) => {
      this.customerId = params.get('id');
      console.log(params);
      this.customer$ = this.http.getdata(Number(this.customerId));
    });
    console.log(this.customerId);
  }

  navigateBack(): void {
    this.location.back();
  }

  onDelete(id: number) {
    this.customerFacade.deleteEmployee(id);
  }
}
