import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { UserService } from '../api-services/user.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-google-sign-in',
  standalone: true,
  imports: [CommonModule, SocialLoginModule],
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.css',
})
export class GoogleSignInComponent implements OnInit {
  //showError: boolean;

  constructor(private router: Router, private userService: UserService) {
    // This service can now make HTTP requests via `this.http`.
  }

  ngOnInit(): void {}

  externalLogin = () => {
    //this.showError = false;
    //this.userService.signInWithGoogle();
  };
}
