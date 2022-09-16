import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";

interface DataItem  {
  upload_date: string;
  batch_id: string;
  batch_name: string;
  last_update:string;
  updated_by: string;
  total_payout: number;
  payment_status: string;
  action: string;
  process_pay: string;
}

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: DataItem[] = [
    {
      upload_date: 'John Brown',
      batch_id: 'KJJKAJJ',
      batch_name: 'New Premiums Batch',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 58662,
      payment_status: 'Pending',
      action: '',
      process_pay: ''
    },
    {
      upload_date: 'John Brown',
      batch_id: 'JHK76HJ',
      batch_name: 'Trial Batch',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 35145,
      payment_status: 'Uploaded',
      action: '',
      process_pay: ''
    },
    {
      upload_date: 'John Brown',
      batch_id: 'KJJKAJJ',
      batch_name: 'Batch For The Demo',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 58662,
      payment_status: 'Pending',
      action: '',
      process_pay: ''
    },
    {
      upload_date: 'John Brown',
      batch_id: 'KJJKAJJ',
      batch_name: 'New Premiums Batch',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 58662,
      payment_status: 'Uploaded',
      action: '',
      process_pay: ''
    },
    {
      upload_date: 'John Brown',
      batch_id: 'JHK76HJ',
      batch_name: 'Trial Batch',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 35145,
      payment_status: 'Uploaded',
      action: '',
      process_pay: ''
    },
    {
      upload_date: 'John Brown',
      batch_id: 'KJJKAJJ',
      batch_name: 'Batch For The Demo',
      last_update: '12/05/2022',
      updated_by: 'joe@gmail.com',
      total_payout: 58662,
      payment_status: 'Pending',
      action: '',
      process_pay: ''
    },

  ];
  listOfDisplayData = [...this.listOfData];
  date: any;


}
