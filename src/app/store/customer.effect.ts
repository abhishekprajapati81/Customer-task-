import { Injectable, inject } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { CustomerActions } from './customer.action';

@Injectable()
export class CustomerEffects {
  action$ = inject(Actions);
  _httpService = inject(CustomerService);

  loadCustomer$ = createEffect(() =>
    this.action$.pipe(
      ofType(CustomerActions.getAllCustomer),
      mergeMap(() =>
        this._httpService
          .showData()
          .pipe(
            map((customer) => CustomerActions.getCustomerSuccess({ customer }))
          )
      )
    )
  );

  addcustomer$ = createEffect(() =>
    this.action$.pipe(
      ofType(CustomerActions.addCustomer),
      mergeMap((action) =>
        this._httpService
          .addNewCustomer(action.customer)
          .pipe(
            map((customer) => CustomerActions.addnewcustomersucc({ customer }))
          )
      )
    )
  );

  deletecustomer$ = createEffect(() =>
    this.action$.pipe(
      ofType(CustomerActions.deleteCustomer),
      mergeMap((action) =>
        this._httpService
          .deleteCustomer(action.id)
          .pipe(
            map(() => CustomerActions.deleteCustomerSuccess({ id: action.id }))
          )
      )
    )
  );

  editCustomer$ = createEffect(() =>
    this.action$.pipe(
      ofType(CustomerActions.updateCustomer),
      mergeMap((action) =>
        this._httpService.updateCustomer(action.id, action.Customeredit).pipe(
          map((Customeredit) =>
            CustomerActions.updateCustomerSeccess({
              id: action.id,
              Customeredit,
            })
          )
        )
      )
    )
  );
}
