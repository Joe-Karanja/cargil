import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EValueRequestRoutingModule } from './e-value-request-routing.module';
import { PendingComponent } from './pending/pending.component';
import { AllComponent } from './all/all.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzModalModule} from "ng-zorro-antd/modal";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NzMessageService} from "ng-zorro-antd/message";


@NgModule({
  declarations: [
    PendingComponent,
    AllComponent,

  ],
  imports: [
    CommonModule,
    EValueRequestRoutingModule,
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
  providers: [
    NzMessageService]
})
export class EValueRequestModule { }
