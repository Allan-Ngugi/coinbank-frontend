import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'coinbank-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  formData!: FormGroup;
  constructor(private authService: AuthService, private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.formData = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  signUp() {
    if (this.formData.valid) {
      this.authService.signUp(this.formData.value).subscribe(
        (data) => {
          console.log(data);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Form input error!');
    }
    // this.authService.signUp(this.user).subscribe(
    //   (response: any) => {
    //     console.log('Sign-up successful');
    //   },
    //   (error: any) => {
    //     console.error('Sign-up failed');
    //     if (error.status === 409) {
    //       console.error(
    //         'User with the provided email already exists. Please choose a different email.'
    //       );
    //     } else if (error.status === 422) {
    //       console.error('Validation error. Please check the entered data.');
    //     } else {
    //       console.error(
    //         'An error occurred during sign-up. Please try again later.'
    //       );
    //     }
    //   }
    // );
  }
}
