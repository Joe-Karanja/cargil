import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";


interface DataItem  {
  full_name: string;
  phone_number: number;
  email: string;
  wallet_account:number;
  wallet_balance: number;
  status: string;
  view: string;
  manage: string;
}
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
  }

  listOfData: DataItem[] = [
    {
      full_name: 'John Brown',
      phone_number: +254115346573,
      email: 'joe@gmail.com',
      wallet_account: 25666,
      wallet_balance: 58652,
      status: 'True',
      view: '',
      manage: ''
    },
    {
      full_name: 'John Brown',
      phone_number: +254115346573,
      email: 'joe@gmail.com',
      wallet_account: 25666,
      wallet_balance: 58652,
      status: 'True',
      view: '',
      manage: ''
    },
    {
      full_name: 'John Brown',
      phone_number: +254115346573,
      email: 'joe@gmail.com',
      wallet_account: 25666,
      wallet_balance: 58652,
      status: 'True',
      view: '',
      manage: ''
    },
    {
      full_name: 'John Brown',
      phone_number: +254115346573,
      email: 'joe@gmail.com',
      wallet_account: 25666,
      wallet_balance: 58652,
      status: 'True',
      view: '',
      manage: ''
    },


  ];
  listOfDisplayData = [...this.listOfData];
  date: any;
}
