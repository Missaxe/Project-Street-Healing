import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidationMessages } from '../shared/messages';
import { UserService } from '../api-services/user.service';
import { User } from '../models/User/user';
import { GoogleSignInComponent } from '../google-sign-in/google-sign-in.component';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, GoogleSignInComponent],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css',
})
export class UserSignupComponent implements OnInit {
  errorMessage: string = '';

  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  };
  validationMessages = ValidationMessages;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    // This service can now make HTTP requests via `this.http`.
  }

  ngOnInit(): void {}

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  toggleFieldVisibility(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe({
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
}
