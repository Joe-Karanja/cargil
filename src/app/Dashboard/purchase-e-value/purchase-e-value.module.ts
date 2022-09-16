import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseEValueRoutingModule } from './purchase-e-value-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzMessageService} from "ng-zorro-antd/message";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseEValueRoutingModule,
    NzCardModule,
    NzStatisticModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    MatCardModule,
    MatTableModule,
    FontAwesomeModule,
    SweetAlert2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NzMessageService]
})
export class PurchaseEValueModule { }
