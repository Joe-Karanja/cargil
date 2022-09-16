import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { EValueBookingsComponent } from './e-value-bookings/e-value-bookings.component';
import { DisbursementsComponent } from './disbursements/disbursements.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PremiumPaymentsComponent } from './premium-payments/premium-payments.component';
import { SupplierPaymentsComponent } from './supplier-payments/supplier-payments.component';
import { EmployeePaymentsComponent } from './employee-payments/employee-payments.component';


@NgModule({
  declarations: [
    EValueBookingsComponent,
    DisbursementsComponent,
    TransactionsComponent,
    PremiumPaymentsComponent,
    SupplierPaymentsComponent,
    EmployeePaymentsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
