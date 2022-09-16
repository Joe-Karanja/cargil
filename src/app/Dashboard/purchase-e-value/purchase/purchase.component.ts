import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";
import {MatTableDataSource} from '@angular/material/table';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {fas} from "@fortawesome/free-solid-svg-icons";

export interface PeriodicElement {
  date: string;
  bookingid: string;
  amount: number;
  reason: string;
  status: string;
  manage: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 1.0079, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 4.0026, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 6.941, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 9.0122, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 10.811, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 12.0107, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 12.0107, reason: 'Buy Cocoa Beans',status: 'pending', manage:''},
  {date: '01/12/2022', bookingid:'KHSHSYH5', amount: 12.0107, reason: 'Buy Cocoa Beans',status: 'pending', manage:''}

];

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  size: NzButtonSize = 'large';
  isVisible = false;

  constructor(private nzMessageService: NzMessageService,library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }






  displayedColumns: string[] = ['DATE', 'BOOKING ID', 'AMOUNT', 'REASON','STATUS','MANAGE'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
