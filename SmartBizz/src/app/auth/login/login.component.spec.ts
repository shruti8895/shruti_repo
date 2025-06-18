import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      const role = this.authService.getRole();
      if (role === 'Admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee/dashboard']);
      } else {
        this.errorMsg = 'Unknown role';
      }
    } else {
      this.errorMsg = 'Invalid username or password';
    }
  }
}
