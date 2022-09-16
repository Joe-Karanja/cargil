import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;

  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

  //Welcome Dashboard
  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  //Payments
  //Bulk
  bulkEmployees() {
    this.router.navigate(['/payments/bulk/employees']);

  }
  bulkFarmers() {
    this.router.navigate(['/payments/bulk/farmers']);

  }
  //Payments
  //premium
  premium() {
    this.router.navigate(['/payments/premium']);
  }

//  Payments
//  Individual
  individualEmployee() {
    this.router.navigate(['/payments/individual/employee']);
  }
  individualSupplier() {
    this.router.navigate(['/payments/individual/supplier']);
  }

  //E-Value Requests
  pending() {
    this.router.navigate(['/requests/pending']);
  }
  all() {
    this.router.navigate(['/requests/all']);
  }

  disbursements() {
    this.router.navigate(['/e-value/disbursements']);
  }
  //Purchase E-Value
  purchase() {
    this.router.navigate(['/purchase-e-value']);
  }


  paymentSettings() {
    this.router.navigate(['/payments/settings'])
  }
  //Interface
  // Farmforce Payments
  viewRecords() {
    this.router.navigate(['/farm-force-payments/view-records'])
  }
  // Farmers
  //Manage farmers
  manageFarmers() {
    this.router.navigate(['/farmers/manage-farmers'])
  }
  //Buyers
  //manage buyers
  manageBuyers() {
    this.router.navigate(['/cocoa-buyers/manage-buyers'])
  }
  //Disbursement Records
  disRecords() {
    this.router.navigate(['/cocoa-buyers/disbursement-records'])
  }

  //Reports

  evalueBookingsReports() {
    this.router.navigate(['/reports/e-value-bookings'])
  }

  disbursementsReports() {
    this.router.navigate(['/reports/disbursements-reports'])
  }

  transactionsReports() {
    this.router.navigate(['/reports/transactions'])
  }

  premiumPaymentsRecords() {
    this.router.navigate(['/reports/premium-payments'])
  }

  supplierPaymentsRecords() {
    this.router.navigate(['/reports/supplier-payments'])
  }

  employeePaymentsRecords() {
    this.router.navigate(['/reports/employee-payments'])
  }

}
