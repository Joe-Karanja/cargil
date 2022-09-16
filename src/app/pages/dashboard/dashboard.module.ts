import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NzCardModule} from "ng-zorro-antd/card";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {AnalyticsModule} from "../../analytics/analytics.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzStatisticModule,
    AnalyticsModule,
    NzTableModule,
    NzDividerModule
  ],
})
export class DashboardModule { }
