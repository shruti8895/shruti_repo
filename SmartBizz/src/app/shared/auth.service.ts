import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'ravi', password: 'ravi123', role: 'Employee' },
    { username: 'sita', password: 'sita123', role: 'Employee' },
  ];
  private currentUser: any = null;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getRole(): string {
    if (!this.currentUser) {
      const data = localStorage.getItem('user');
      if (data) this.currentUser = JSON.parse(data);
    }
    return this.currentUser?.role || '';
  }

  getUsername(): string {
    if (!this.currentUser) {
      const data = localStorage.getItem('user');
      if (data) this.currentUser = JSON.parse(data);
    }
    return this.currentUser?.username || '';
  }

  // ✅ This was missing
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // ✅ This was missing
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}
