import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PremiumComponent } from './premium/premium.component';
import { SettingsComponent } from './settings/settings.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {NzMessageService} from "ng-zorro-antd/message";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {MatCardModule} from '@angular/material/card';
import {FarmersComponent} from "./bulk/farmers/farmers.component";
import {EmployeesComponent} from "./bulk/employees/employees.component";
import {EmployeeComponent} from "./individual/employee/employee.component";
import {SupplierComponent} from "./individual/supplier/supplier.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {MatTableModule} from "@angular/material/table";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PremiumComponent,
    SettingsComponent,
    FarmersComponent,
    EmployeesComponent,
    EmployeeComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    MatCardModule,
    MatTableModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NzMessageService]

})
export class PaymentsModule { }
