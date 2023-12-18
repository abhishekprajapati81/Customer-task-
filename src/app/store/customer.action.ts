import { Action, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../modal/customer.modal';
import { CustomerState } from './customer.state';
import { customerReducer } from './customer.reducer';

export const CustomerActions = createActionGroup({
  source: 'Customer Actions',
  events: {
    getAllCustomer: emptyProps(),
    getCustomerSuccess: props<{ customer: Customer[] }>(),
    getCustomerFailure: props<{ error: string }>(),
  },
});
