import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../modal/customer.modal';

export const CustomerActions = createActionGroup({
  source: 'Customer Actions',
  events: {
    getAllCustomer: emptyProps(),
    getCustomerSuccess: props<{ customer: Customer[] }>(),
    getCustomerFailure: props<{ error: string }>(),

    addCustomer: props<{ customer: Customer }>(),
    addnewcustomersucc: props<{ customer: Customer }>(),
    addcustomerfail: props<{ error: string }>(),

    deleteCustomer: props<{ id: number }>(),
    deleteCustomerSuccess: props<{ id: number }>(),

    // editCustomer: props<{ customer: Customer }>(),
    // editCustomersucc: props<{ custmer: Customer }>(),
    // editCoustomerfail: props<{ error: string }>(),

    updateCustomer: props<{ id: number; Customeredit: Customer }>(),
    updateCustomerSeccess: props<{ id: number; Customeredit: Customer }>(),
    updateCustomerFailure: props<{ error: string }>(),
  },
});
