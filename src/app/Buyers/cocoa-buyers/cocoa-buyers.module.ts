import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocoaBuyersRoutingModule } from './cocoa-buyers-routing.module';
import { ManageComponent } from './manage/manage.component';
import { DisbursementRecordsComponent } from './disbursement-records/disbursement-records.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {MatCardModule} from "@angular/material/card";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzModalModule} from "ng-zorro-antd/modal";
import {MatTableModule} from "@angular/material/table";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ManageComponent,
    DisbursementRecordsComponent
  ],
  imports: [
    CommonModule,
    CocoaBuyersRoutingModule,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NzMessageService],
})
export class CocoaBuyersModule { }
