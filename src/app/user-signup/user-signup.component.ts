import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css',
})
export class UserSignupComponent {
  errorMessage: string = '';

  formData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  };

  constructor(private http: HttpClient, private router: Router) {
    // This service can now make HTTP requests via `this.http`.
  }

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    this.http
      .post<{ id: string }>(
        'https://localhost:7066/api/User/register',
        this.formData
      )
      .subscribe({
        next: (response) => {
          console.log('Success', response);
          this.router.navigate(['/sendotp', response.id]);
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          console.error('Error', error);
        },
      });
  }

  onGet() {
    this.http
      .post('https://localhost:7066/api/User/register', this.formData)
      .subscribe({
        next: (response) => {
          console.log('Success', response);
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          console.error('Error', error);
        },
      });
  }
}
