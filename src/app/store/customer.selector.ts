import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState, adapter } from './customer.state';

export const selectCustomerState =
  createFeatureSelector<CustomerState>('Customer');

export const selectCustomer = createSelector(
  selectCustomerState,
  adapter.getSelectors().selectAll
);
