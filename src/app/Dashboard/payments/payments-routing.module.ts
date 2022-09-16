import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PremiumComponent} from "./premium/premium.component";
import {SettingsComponent} from "./settings/settings.component";
import {LayoutComponent} from "../../shared/layout/layout/layout.component";
import {EmployeesComponent} from "./bulk/employees/employees.component";
import {FarmersComponent} from "./bulk/farmers/farmers.component";
import {EmployeeComponent} from "./individual/employee/employee.component";
import {SupplierComponent} from "./individual/supplier/supplier.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'premium',
        component: PremiumComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      //bulk payments
      {
        path: 'bulk/employees',
        component: EmployeesComponent
      },
      {
        path: 'bulk/farmers',
        component: FarmersComponent
      },
    //  individual payments
      {
        path: 'individual/employee',
        component: EmployeeComponent
      },
      {
        path: 'individual/supplier',
        component: SupplierComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
