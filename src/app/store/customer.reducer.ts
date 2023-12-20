import { createReducer, on } from '@ngrx/store';
import { CustomerState, adapter, initialState } from './customer.state';
import { CustomerActions } from './customer.action';

export const customerReducer = createReducer<CustomerState>(
  initialState,
  on(CustomerActions.getAllCustomer, (state) => ({ ...state })),
  on(CustomerActions.getCustomerSuccess, (state, { customer }) => {
    return adapter.setAll(customer, state);
  }),
  on(CustomerActions.addCustomer, (state, { customer: newCustomers }) => {
    return adapter.addOne(newCustomers, state);
  }),
  on(CustomerActions.deleteCustomer, (state, action) => {
    return adapter.removeOne(action.id, state);
  })
  // on(CustomerActions.editCustomer, (state, { customer }) => {
  //   return adapter.updateMany(customer, state);
  // })
  // on(CustomerActions.updateCustomer, (state, { id, customer }) => {
  //   return adapter.updateOne({ id: id, changes: customer }, state);
  // })
);
