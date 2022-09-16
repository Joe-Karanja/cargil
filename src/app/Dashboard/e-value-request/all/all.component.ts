import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  date: string;
  time: string
  buyer_no:string;
  buyer_name: string;
  phone_number: number;
  amount: number;
  balance: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '12/05/2022',time:'9:55:15 PM',buyer_no:'K3HJHY445',  buyer_name:'Joseph Karanja', phone_number: +950486528,amount: 90562, balance: 8563,status: 'pending'},
  {date: '28/12/2022',time:'6:23:42 AM',buyer_no:'HGD4578BG', buyer_name:'Erick Maina', phone_number: +254756328,amount: 52562, balance: 23863,status: 'serviced'},
  {date: '09/11/2022',time:'4:39:33 PM',buyer_no:'GDSTYBB7I', buyer_name:'Brian Kimathi', phone_number: +650486528,amount: 100562, balance: 78563,status: 'serviced'},
  {date: '22/05/2022',time:'8:26:19 AM',buyer_no:'04UHF5Y56',  buyer_name:'Michael Mbugua', phone_number: +152525254,amount: 420562, balance: 8563,status: 'pending'},
  {date: '29/01/2022',time:'6:23:42 AM',buyer_no:'J5QWRTG7I', buyer_name:'Eugene Chyewa', phone_number: +2545632856,amount: 32562, balance: 23863,status: 'serviced'},
  {date: '06/08/2022',time:'10:05:36 PM',buyer_no:'KH750GVL',  buyer_name:'Luka Macharia', phone_number: +853332528,amount: 85562, balance: 8563,status: 'pending'},
  {date: '29/02/2022',time:'12:26:12 AM',buyer_no:'BGYRDRYJ', buyer_name:'Daniel Kimathi', phone_number: +25475456328,amount: 452562, balance: 23863,status: 'serviced'},
  {date: '18/04/2022',time:'9:55:15 PM',buyer_no:'Y68TTYUHB',  buyer_name:'Onesmus Kibui', phone_number: +950486528,amount: 97562, balance: 8563,status: 'pending'},
  {date: '18/14/2022',time:'6:23:42 AM',buyer_no:'776H5VVJ', buyer_name:'Peter Munya', phone_number: +25475556328,amount: 58562, balance: 23863,status: 'serviced'},



];

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  size: NzButtonSize = 'small';

  constructor(library: FaIconLibrary, private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['DATE', 'BUYER NUMBER', 'BUYER NAME', 'PHONE NUMBER', 'AMOUNT','BALANCE' ,'STATUS'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
