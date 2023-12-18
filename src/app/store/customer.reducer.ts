import { createReducer, on } from '@ngrx/store';
import { CustomerState, adapter, initialState } from './customer.state';
import { CustomerActions } from './customer.action';

export const customerReducer = createReducer<CustomerState>(
  initialState,
  on(CustomerActions.getAllCustomer, (state) => ({ ...state })),
  on(CustomerActions.getCustomerSuccess, (state, { customer }) => {
    return adapter.setAll(customer, state);
  })
);
