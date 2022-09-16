import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {NzButtonSize} from "ng-zorro-antd/button";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";

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
  {buyer_id: 'F5HJHY4', fullname:'Brian Kimathi', phonenumber: +650486528, email: 'brian@gmail.com',wallet_account: 100562, current_balance: 85563,action: ''},
  {buyer_id: 'K3HJHY4', fullname:'Luka Macharia', phonenumber: +350486528, email: 'luka@gmail.com',wallet_account: 63562, current_balance: 5663,action: ''},
  {buyer_id: 'J3HKHY4', fullname:'Wens Juma', phonenumber: +450486528, email: 'wens@gmail.com',wallet_account: 45562, current_balance: 89263,action: ''},
  {buyer_id: 'H3HLTY4', fullname:'Michael Mbugua', phonenumber: +550486528, email: 'michael@gmail.com',wallet_account: 905562, current_balance: 6863,action: ''},

];

@Component({
  selector: 'app-disbursement',
  templateUrl: './disbursement.component.html',
  styleUrls: ['./disbursement.component.css']
})
export class DisbursementComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }



  displayedColumns: string[] = ['BUYER ID', 'FULL NAME', 'PHONE NUMBER', 'EMAIL', 'WALLET ACCOUNT','CURRENT BALANCE','ACTION'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
