import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      const role = this.authService.getRole();
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee']);
      } else {
        this.errorMsg = 'Unknown user role';
      }
    } else {
      this.errorMsg = 'Invalid username or password';
    }
  }
}
