import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";

interface DataItem  {
  section_idx: string;
  payment_type: string;
  period: string;
  date_created:string;
  delete: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  size: NzButtonSize = 'large';

  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
  }

  listOfData: DataItem[] = [
    {
      section_idx: '22',
      payment_type: 'Bulk Employee Payments',
      period: '123',
      date_created: '06/06/2022',
      delete: '',
    },
    {
      section_idx: '25',
      payment_type: 'Premium Payments',
      period: '123',
      date_created: '17/06/2022',
      delete: '',
    }

  ];
  listOfDisplayData = [...this.listOfData];
  date: any;



}
