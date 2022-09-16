import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PurchaseComponent} from "./purchase/purchase.component";
import {LayoutComponent} from "../../shared/layout/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'purchase-e-value',
        component: PurchaseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseEValueRoutingModule { }
