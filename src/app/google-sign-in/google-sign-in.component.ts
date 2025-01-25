import { Component } from '@angular/core';
import { UserService } from '../api-services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-google-sign-in',
  standalone: true,
  imports: [CommonModule, SocialLoginModule],
  providers: [],
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.css',
})
export class GoogleSignInComponent implements OnInit {
  errorMessage: string = '';
  showError: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    // This service can now make HTTP requests via `this.http`.
  }

  ngOnInit(): void {}

  externalLogin = () => {
    this.showError = false;
    this.userService.signInWithGoogle();
  };
}
