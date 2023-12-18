import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCustomer } from './customer.selector';
import { CustomerActions } from './customer.action';

export class CustomerFacade {
  store = inject(Store);
  customerList$ = this.store.select(selectCustomer);

  getAllCustomer() {
    this.store.dispatch(CustomerActions.getAllCustomer());
  }
}
