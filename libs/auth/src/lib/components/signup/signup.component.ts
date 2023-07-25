import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'coinbank-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  signUp() {
    this.authService.signUp(this.user).subscribe(
      (response: any) => {
        console.log('Sign-up successful');
      },
      (error: any) => {
        console.error('Sign-up failed');
        if (error.status === 409) {
          console.error(
            'User with the provided email already exists. Please choose a different email.'
          );
        } else if (error.status === 422) {
          console.error('Validation error. Please check the entered data.');
        } else {
          console.error(
            'An error occurred during sign-up. Please try again later.'
          );
        }
      }
    );
  }
}
