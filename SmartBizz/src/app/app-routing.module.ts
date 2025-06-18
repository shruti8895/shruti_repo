import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { CustomersComponent } from './admin/customers/customers.component';
import { ProductsComponent } from './admin/products/products.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { AdminReportsComponent } from './admin/reports/reports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'customers', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'reports', component: AdminReportsComponent }
    ]
  },
  {
   path: 'employee',
  component: EmployeeDashboardComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'customers', component: CustomersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'transactions', component: TransactionsComponent },
  ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
