import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";
import {MatTableDataSource} from "@angular/material/table";


export interface PeriodicElement {
  reference_code: string;
  farmer: string;
  buyer: string;
  total_amount: number;
  paid_amount: number;
  pending_amount: number;
  cocoa_weight: number;
  uom: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {reference_code: 'K3HJHY4', farmer:'Joseph Karanja',buyer:'Erick Cantona', total_amount:860000, paid_amount: 45231,pending_amount: 90562, cocoa_weight: 100,uom: 'kg',status:'True'},
  {reference_code: 'K4HJHY4', farmer:'Michael Mbugua',buyer:'Joseph Karanja', total_amount:340000, paid_amount: 25708,pending_amount: 314292, cocoa_weight: 100,uom: 'kg',status:'False'},
  {reference_code: 'K5HJHY4', farmer:'Joseph Karanja',buyer:'Brian Kimathi', total_amount:450000, paid_amount: 45231,pending_amount: 90562, cocoa_weight: 100,uom: 'kg',status:'False'},
  {reference_code: 'K2HJHY4', farmer:'Brian Kimathi',buyer:'Michael Mbugua', total_amount:662000, paid_amount: 0,pending_amount: 90562, cocoa_weight: 100,uom: 'kg',status:'True'},
];

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.css']
})
export class ViewRecordsComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['REFERENCE CODE','FARMER','BUYER', 'TOTAL AMOUNT','PAID AMOUNT','PENDING AMOUNT', 'COCOA WEIGHT','UOM','STATUS'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
