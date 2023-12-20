import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'customeradd',
        component: AddCustomerComponent,
      },
    ],
  },
  {
    path: 'detail/:id',
    component: CustomerDetailsComponent,
    children: [{ path: 'custedit/:id', component: EditCustomerComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
