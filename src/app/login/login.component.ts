import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService :AuthService = inject(AuthService)
  route :Router = inject(Router)

  email :string = ''
  password :string = ''
  errorMessage :string = ''

  onLogin(){
    const success = this.authService.login(this.email , this.password)
     if (success) {
    this.route.navigate(['/home']);
  } else {
    this.errorMessage = '❌ Invalid email or password';
  }
  }
}
