import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 25000; // mock
  outstandingDues = 4500; // mock

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
    this.totalProducts = this.productService.getProducts().length;
  }
}
