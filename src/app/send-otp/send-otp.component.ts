import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-otp',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css',
})
export class SendOtpComponent {
  messageOtp: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // This service can now make HTTP requests via `this.http`.
  }

  onGet(): void {}
  sendCode() {
    this.http
      .post<{ id: string }>(
        'https://localhost:7066/api/User/sendToken',
        +this.route.snapshot.params['id']
      )
      .subscribe({
        next: (response) => {
          this.messageOtp = 'a code was sent into your email ';
          console.log('Success', response);
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
  }
}
