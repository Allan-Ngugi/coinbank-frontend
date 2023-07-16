import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'coinbank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(`Welcome, ${response.username}!`);
      },
      (error) => {
        console.error(
          'An error occurred during login. Please try again.'
        );
      }
    );
  }
}
