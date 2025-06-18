import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { ProductsComponent } from './admin/products/products.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { MakeSaleComponent } from './employee/make-sale/make-sale.component';
import { AddCustomerComponent } from './employee/add-customer/add-customer.component';
import { ViewProductsComponent } from './employee/view-products/view-products.component';
import { AdminReportsComponent } from './admin/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomersComponent,
    ProductsComponent,
    TransactionsComponent,
    AdminReportsComponent,
    EmployeeDashboardComponent,
    MakeSaleComponent,
    AddCustomerComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
