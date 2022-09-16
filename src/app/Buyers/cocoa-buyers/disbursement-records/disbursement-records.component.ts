import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {MatTableDataSource} from "@angular/material/table";


export interface PeriodicElement {
  approval_date: string;
  name: string;
  phone_number: number;
  amount_requested: number;
  amount_approved: number;
  reasons: string;
  wallet_balance: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {approval_date: '6/13/2022 1:54:11 PM', name:'Joseph Karanja', phone_number: +2547115346573, amount_requested: 65822,amount_approved: 65822, reasons:'request funds',wallet_balance: 124370,status: '1'},
  {approval_date: '6/13/2022 7:00:24 PM', name:'Erick Cantona', phone_number: +2547115346573, amount_requested: 75892,amount_approved: 60562, reasons:'pay farmers',wallet_balance: 0,status: '1'},
  {approval_date: '6/13/2022 1:54:11 PM', name:'Joseph Karanja', phone_number: +2547115346573, amount_requested: 100560,amount_approved: 90562, reasons:'request funds',wallet_balance: 124370,status: '1'},
  {approval_date: '6/13/2022 7:00:24 PM', name:'Erick Cantona', phone_number: +2547115346573, amount_requested: 96256,amount_approved: 90562, reasons:'pay farmers',wallet_balance: 0,status: '1'},
  {approval_date: '6/13/2022 1:54:11 PM', name:'Joseph Karanja', phone_number: +2547115346573, amount_requested: 45856,amount_approved: 20562, reasons:'request funds',wallet_balance: 124370,status: '1'},
  {approval_date: '6/13/2022 7:00:24 PM', name:'Erick Cantona', phone_number: +2547115346573, amount_requested: 45856,amount_approved: 15562, reasons:'pay farmers',wallet_balance: 0,status: '1'},
];

@Component({
  selector: 'app-disbursement-records',
  templateUrl: './disbursement-records.component.html',
  styleUrls: ['./disbursement-records.component.css']
})
export class DisbursementRecordsComponent implements OnInit {
  size: NzButtonSize = 'small';

  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['APPROVAL DATE', 'NAME', 'PHONE NUMBER', 'AMOUNT REQUESTED', 'AMOUNT APPROVED','REASONS','WALLET BALANCE','STATUS'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

