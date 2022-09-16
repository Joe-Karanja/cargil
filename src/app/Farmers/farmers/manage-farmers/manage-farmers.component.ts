import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  full_name: string;
  phone_number: number;
  email: string;
  wallet_account: string;
  wallet_balance: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {full_name: 'Joseph Karanja', phone_number: +950486528, email: 'joe@gmail.com',wallet_account: '9051-4787-3048', wallet_balance: 'CFA 4 860,00',status: 'false'},
  {full_name: 'Brian Kimathi', phone_number: +254756328, email: 'erick@gmail.com',wallet_account: '3510-6796-6480', wallet_balance: 'CFA 4 860,00',status: 'True'},
  {full_name: 'Luka Macharia', phone_number: +650486528, email: 'brian@gmail.com',wallet_account: '2671-7377-1549', wallet_balance: 'CFA 0,00',status: 'false'},
  {full_name: 'Joseph Karanja', phone_number: +650486528, email: 'brian@gmail.com',wallet_account: '3070-3478-4303', wallet_balance: 'CFA 57 650,00',status: 'false'},
  {full_name: 'Joseph Karanja', phone_number: +650486528, email: 'brian@gmail.com',wallet_account: '9357-6399-4810', wallet_balance: 'CFA 57 650,00',status: 'true'}

];

@Component({
  selector: 'app-manage-farmers',
  templateUrl: './manage-farmers.component.html',
  styleUrls: ['./manage-farmers.component.css']
})
export class ManageFarmersComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['FULL NAME', 'PHONE NUMBER', 'EMAIL', 'WALLET ACCOUNT', 'WALLET BALANCE','STATUS','VIEW','MANAGE'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
