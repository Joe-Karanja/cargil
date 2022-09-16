import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { ManageFarmersComponent } from './manage-farmers/manage-farmers.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {MatCardModule} from "@angular/material/card";
import {NzMessageService} from "ng-zorro-antd/message";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    ManageFarmersComponent
  ],
  imports: [
    CommonModule,
    FarmersRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    MatCardModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NzMessageService],
})
export class FarmersModule { }
