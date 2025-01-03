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
  otpValue: string = '';
  responseOtp: string = '';

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
      .post<{ id: number; otp: string }>(
        'https://localhost:7066/api/User/sendOtp',
        +this.route.snapshot.params['id']
      )
      .subscribe({
        next: (response) => {
          this.messageOtp = 'Code sent, check your email ';
          this.responseOtp = response.otp;
          console.log('Success', response.otp);
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
  }
  onSubmit(): void {
    if (this.responseOtp === this.otpValue) {
      console.log('responseOtp', this.responseOtp);
      console.log('otpValue', this.otpValue);

      this.router.navigate(['/home']);
    } else {
      console.log('responseOtp', this.responseOtp);
      console.log('otpValue', this.otpValue);
      this.messageOtp = 'Otp is not valid ';
    }
  }
}
