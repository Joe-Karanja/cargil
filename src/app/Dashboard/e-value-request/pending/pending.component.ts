import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {NzButtonSize} from "ng-zorro-antd/button";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {fas} from "@fortawesome/free-solid-svg-icons";

export interface PeriodicElement {
  buyer_id: string;
  fullname: string;
  phonenumber: number;
  email: string;
  wallet_account: number;
  current_balance: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {buyer_id: 'K3HJHY4', fullname:'Joseph Karanja', phonenumber: +950486528, email: 'joe@gmail.com',wallet_account: 90562, current_balance: 8563,action: ''},
  {buyer_id: 'Z3HGHY4', fullname:'Erick Maina', phonenumber: +254756328, email: 'erick@gmail.com',wallet_account: 52562, current_balance: 23863,action: ''},
  {buyer_id: 'F5HJHY4', fullname:'Brian Kimathi', phonenumber: +650486528, email: 'brian@gmail.com',wallet_account: 100562, current_balance: 85563,action: ''}

];

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  size: NzButtonSize = 'small';

  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['BOOKING ID', 'BUYER NUMBER', 'BUYER NAME', 'PHONE NUMBER', 'AMOUNT','STATUS','DISBURSE','MANAGE'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
