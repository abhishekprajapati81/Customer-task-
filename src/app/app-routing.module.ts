import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerComponent } from './customers/customer/customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'detail/:id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
