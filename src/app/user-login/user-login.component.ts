import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  formLogin = {
    emailValue: '',
    passwordValue: '',
  };

  constructor(private http: HttpClient, private router: Router) {
    // This service can now make HTTP requests via `this.http`.
  }

  onSubmit() {
    this.http
      .post('https://localhost:7066/api/User/authenticate', this.formLogin)
      .subscribe({
        next: (response) => {
          console.log('Success', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error', error);
          console.log('email', this.formLogin.emailValue);
          console.log('email', this.formLogin.passwordValue);
        },
      });
  }
}
