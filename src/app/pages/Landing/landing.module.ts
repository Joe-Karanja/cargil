import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from "@angular/material/sidenav";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MatButtonModule} from '@angular/material/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NzLayoutModule,
    MatTabsModule,
    MatSidenavModule,
    NzCardModule,
    NzButtonModule,
    MatButtonModule,
    NzIconModule,
    MatIconModule,
    FontAwesomeModule,
  ],
})
export class LandingModule {

}
