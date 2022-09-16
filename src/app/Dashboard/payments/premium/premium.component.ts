import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {NzButtonSize} from "ng-zorro-antd/button";
import {MatTableDataSource} from "@angular/material/table";


export interface PeriodicElement {
  uplaod_dated: string;
  batch_id: string;
  batch_name: string;
  last_update: string;
  updated_by: string;
  total_payout: number;
  payment_status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {uplaod_dated: '6/27/2022 8:07:52 PM', batch_id:'X3UP4VQG', batch_name: 'New Premiums Batch', last_update: '6/27/2022 8:07:52 PM',updated_by: 'joe@gmail.com', total_payout: 8563,payment_status: 'Pending'},
  {uplaod_dated: '6/27/2022 8:08:13 PM', batch_id:'X3UP4VQG', batch_name: 'Trail Batch', last_update: '6/27/2022 8:08:13 PM',updated_by: 'joe@gmail.com', total_payout: 23863,payment_status: 'Uploaded'},
  {uplaod_dated: '6/28/2022 11:00:19 AM', batch_id:'FXHQ2WMS', batch_name: 'Batch for Demo', last_update: '6/28/2022 11:00:19 AM',updated_by: 'joe@gmail.com', total_payout: 85563,payment_status: 'Pending'}

];
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['UPLOAD DATE', 'BATCH ID','BATCH NAME', 'LAST UPDATE', 'UPDATED BY', 'TOTAL PAYOUT','PAYMENT STATUS','ACTION','PROCESS PAY'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
