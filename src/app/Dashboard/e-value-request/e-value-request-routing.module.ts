import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../../shared/layout/layout/layout.component";
import {PendingComponent} from "./pending/pending.component";
import {AllComponent} from "./all/all.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pending',
        component: PendingComponent
      },
      {
        path: 'all',
        component: AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EValueRequestRoutingModule { }
