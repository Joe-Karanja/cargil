import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmForcePaymentsRoutingModule } from './farm-force-payments-routing.module';
import { ViewRecordsComponent } from './view-records/view-records.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {MatCardModule} from "@angular/material/card";
import {NzMessageService} from "ng-zorro-antd/message";
import {MatTable, MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    ViewRecordsComponent
  ],
  imports: [
    CommonModule,
    FarmForcePaymentsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    MatCardModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NzMessageService]
})
export class FarmForcePaymentsModule { }
