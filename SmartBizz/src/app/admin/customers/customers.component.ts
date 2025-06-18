import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  newCustomer = { id: 0, name: '', mobile: '', address: '' };
  isAdmin = false;
  errorMsg = '';

  constructor(private customerService: CustomerService, private authService: AuthService) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.isAdmin = this.authService.getRole() === 'Admin';
  }

  addCustomer() {
    const nameValid = /^[a-zA-Z\s]{3,}$/.test(this.newCustomer.name);
    const phoneValid = /^[0-9]{10}$/.test(this.newCustomer.mobile);
    const addressValid = /^[a-zA-Z0-9\s,.-]{3,}$/.test(this.newCustomer.address);

    if (!nameValid) {
      this.errorMsg = 'Customer name must be a string with at least 3 letters.';
      return;
    }
    if (!phoneValid) {
      this.errorMsg = 'Mobile number must be a 10-digit number.';
      return;
    }
    if (!addressValid) {
      this.errorMsg = 'Address must be at least 3 characters (letters, numbers, or , . -).';
      return;
    }

    this.newCustomer.id = this.customers.length + 1;
    this.customerService.addCustomer(this.newCustomer);
    this.customers = this.customerService.getCustomers();
    this.newCustomer = { id: 0, name: '', mobile: '', address: '' };
    this.errorMsg = '';
  }

  deleteCustomer(id: number) {
    if (this.isAdmin) {
      this.customerService.deleteCustomer(id);
      this.customers = this.customerService.getCustomers();
    }
  }
  editCustomer(customer: any) {
  this.newCustomer = { ...customer }; // Load data into form
  this.deleteCustomer(customer.id);   // Remove original row so update replaces it
}

}
