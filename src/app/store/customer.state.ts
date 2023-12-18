import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '../modal/customer.modal';

export interface CustomerState extends EntityState<Customer> {}
export const adapter = createEntityAdapter<Customer>();

export const initialState: CustomerState = adapter.getInitialState({});
