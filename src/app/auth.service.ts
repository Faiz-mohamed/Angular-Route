import { Injectable , inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLoggedInStatus :boolean = false;

  route :Router = inject(Router)

  login(email: string, password: string): boolean {
    
    if (email === 'admin@mail.com' && password === 'admin') {
      this.isLoggedInStatus = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedInStatus = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}
