import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCustomer } from './customer.selector';
import { CustomerActions } from './customer.action';
import { Customer } from '../modal/customer.modal';

export class CustomerFacade {
  store = inject(Store);
  customerList$ = this.store.select(selectCustomer);

  getAllCustomer() {
    this.store.dispatch(CustomerActions.getAllCustomer());
  }

  addNewCustomer(customer: Customer) {
    this.store.dispatch(CustomerActions.addCustomer({ customer }));
  }

  deleteEmployee(id: number) {
    this.store.dispatch(CustomerActions.deleteCustomer({ id }));
  }

  editCustomer(id: number, Customeredit: Customer) {
    this.store.dispatch(CustomerActions.updateCustomer({ id, Customeredit }));
  }
}
