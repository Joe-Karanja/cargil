import { Component, OnInit } from '@angular/core';

interface DataItem  {
  date: string;
  time: string;
  buyerId: string;
  buyer:string;
  phoneNumber: number;
  walletId: string;
  balance: number;
  status: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: DataItem[]  = [
    {
      date: '01/03/2022',
      time: '5:01:13 AM',
      buyerId: '9053-5267',
      buyer: 'Joseph Karanja',
      phoneNumber: 115346573 ,
      walletId: '4788-4190-3760',
      balance: 0,
      status: 'Pending'
    },
    {
      date: '01/03/2022',
      time: '5:01:13 AM',
      buyerId: '9053-5267',
      buyer: 'Joseph Karanja',
      phoneNumber: 115346573 ,
      walletId: '4788-4190-3760',
      balance: 0,
      status: 'Pending'
    },
    {
      date: '01/03/2022',
      time: '5:01:13 AM',
      buyerId: '9053-5267',
      buyer: 'Joseph Karanja',
      phoneNumber: 115346573 ,
      walletId: '4788-4190-3760',
      balance: 0,
      status: 'Pending'
    },
    {
      date: '01/03/2022',
      time: '5:01:13 AM',
      buyerId: '9053-5267',
      buyer: 'Joseph Karanja',
      phoneNumber: 115346573 ,
      walletId: '4788-4190-3760',
      balance: 0,
      status: 'Pending'
    },

  ];

}
