import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
  const isLoggedIn = this.authService.isLoggedIn();
  const role = this.authService.getRole();

  if (!isLoggedIn) {
    this.router.navigate(['/login']);
    return false;
  }

  const url = state.url;

  if (url.startsWith('/admin') && role !== 'Admin') {
    this.router.navigate(['/login']);
    return false;
  }

  if (url.startsWith('/employee') && role !== 'Employee') {
    this.router.navigate(['/login']);
    return false;
  }

  return true;
}
}
