import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../../shared/layout/layout/layout.component";
import {ManageComponent} from "./manage/manage.component";
import {DisbursementRecordsComponent} from "./disbursement-records/disbursement-records.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'manage-buyers',
        component:ManageComponent
      },
      {
        path: 'disbursement-records',
        component: DisbursementRecordsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocoaBuyersRoutingModule { }
