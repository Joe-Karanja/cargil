import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saleData = [
    { name: "2022", value: 150000 },
    { name: "2021", value: 55000 },
    { name: "2020", value: 15000 },
    { name: "2019", value: 105000 },
    { name: "2018", value: 20000 }
  ];

}
