import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './store/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/customer.effect';
import { CustomerFacade } from './store/customer.facade';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';

@NgModule({
  declarations: [AppComponent, CustomerComponent, CustomerDetailsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ Customer: customerReducer }),
    EffectsModule.forRoot([CustomerEffects]),
  ],
  providers: [CustomerFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
