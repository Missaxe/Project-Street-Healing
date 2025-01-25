import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../api-services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  errorMessage: string = '';
  showError: boolean = false;
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  };

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {
    // This service can now make HTTP requests via `this.http`.
  }

  onSubmit(): void {
    this.userService.loginUser(this.user).subscribe({
      next: (response) => {
        console.log('Success', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        console.error('Error', error);
        console.log('email', this.user.email);
        console.log('email', this.user.password);
      },
    });
  }
}
