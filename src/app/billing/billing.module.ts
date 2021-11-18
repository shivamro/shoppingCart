import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillComponent } from './bill/bill.component';
import { DetailsComponent } from './bill/details/details.component';
import { CartComponent } from './bill/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BillComponent,
    DetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BillingModule { }
