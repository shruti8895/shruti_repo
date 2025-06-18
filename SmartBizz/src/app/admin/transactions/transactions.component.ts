import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: any[] = [];
  newTransaction = { customer: '', product: '', amount: 0 };
  isAdmin = false;

  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.getRole() === 'Admin';
  }

  addTransaction() {
    if (this.newTransaction.customer && this.newTransaction.product && this.newTransaction.amount > 0) {
      this.transactions.push({ ...this.newTransaction });
      this.newTransaction = { customer: '', product: '', amount: 0 };
    }
  }
}

