import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../../shared/layout/layout/layout.component";
import {EValueBookingsComponent} from "./e-value-bookings/e-value-bookings.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {PremiumPaymentsComponent} from "./premium-payments/premium-payments.component";
import {SupplierPaymentsComponent} from "./supplier-payments/supplier-payments.component";
import {EmployeePaymentsComponent} from "./employee-payments/employee-payments.component";
import {DisbursementsComponent} from "./disbursements/disbursements.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'e-value-bookings',
        component: EValueBookingsComponent
      },
      {
        path: 'disbursements-reports',
        component: DisbursementsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'premium-payments',
        component: PremiumPaymentsComponent
      },
      {
        path: 'supplier-payments',
        component: SupplierPaymentsComponent
      },
      {
        path: 'employee-payments',
        component: EmployeePaymentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
