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
}
