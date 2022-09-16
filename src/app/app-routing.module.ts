import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/index' },
  {
    path: 'home',
    loadChildren: () => import('./pages/Landing/landing.module').then(m=> m.LandingModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/layout/layout.module').then(m=> m.LayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(m=> m.SharedModule)
  },
  //Dashboard
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('./analytics/analytics.module').then(m=> m.AnalyticsModule)
  },

// DASHBOARD
//  Payments
  {
    path: 'payments',
    loadChildren: () => import('./Dashboard/payments/payments.module').then(m=> m.PaymentsModule)
  },
//  Purchase E-Value
  {
    path: '',
    loadChildren: () => import('./Dashboard/purchase-e-value/purchase-e-value.module').then(m=> m.PurchaseEValueModule)
  },
  //E-Value Requests
  {
    path: 'requests',
    loadChildren: () => import('./Dashboard/e-value-request/e-value-request.module').then(m=> m.EValueRequestModule)
  },
//  E-Value-Disbursements
  {
    path: 'e-value',
    loadChildren: () => import('./Dashboard/e-value-disbursement/e-value-disbursement.module').then(m=> m.EValueDisbursementModule)
  },

//INTERFACE
//
  {
    path: 'farm-force-payments',
    loadChildren: () => import('./Interface/farm-force-payments/farm-force-payments.module').then(m=> m.FarmForcePaymentsModule)
  },

//  FARMERS
  {
    path: 'farmers',
    loadChildren: () => import('./Farmers/farmers/farmers.module').then(m=> m.FarmersModule)
  },


//  BUYERS
//  Cocoa Buyers
  {
    path: 'cocoa-buyers',
    loadChildren: () => import('./Buyers/cocoa-buyers/cocoa-buyers.module').then(m=> m.CocoaBuyersModule)
  },
//  STAKEHOLDERS
  {
    path: '',
    loadChildren: () => import('./Stakeholders/stakeholders/stakeholders.module').then(m=> m.StakeholdersModule)
  },

//  REPORTS
  {
    path: 'reports',
    loadChildren: () => import('./Reports/reports/reports.module').then(m=> m.ReportsModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
