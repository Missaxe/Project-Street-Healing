// import { Component } from '@angular/core';
// import { UserService } from '../api-services/user.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';
// import { SocialLoginModule } from '@abacritt/angularx-social-login';
// import { ExternalAuthDto } from '../models/google-external-auth/ExternalAuthDto';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-google-sign-in',
//   standalone: true,
//   imports: [CommonModule, SocialLoginModule],
//   providers: [],
//   templateUrl: './google-sign-in.component.html',
//   styleUrl: './google-sign-in.component.css',
// })
// export class GoogleSignInComponent implements OnInit {
//   returnUrl: string = '';
//   errorMessage: string = '';
//   showError: boolean = false;

//   constructor(private router: Router, private userService: UserService) {
//     // This service can now make HTTP requests via `this.http`.
//   }

//   ngOnInit(): void {}

//   externalLogin = () => {
//     this.showError = false;
//     this.userService.signInWithGoogle();

//     this.userService.extAuthChanged.subscribe((user) => {
//       const externalAuth: ExternalAuthDto = {
//         provider: user.provider,
//         idToken: user.idToken,
//       };

//       this.validateExternalAuth(externalAuth);
//     });
//   };
//   private validateExternalAuth(externalAuth: ExternalAuthDto) {
//     this.userService.externalLogin(externalAuth).subscribe({
//       next: (res) => {
//         localStorage.setItem('token', res.token);
//         this.userService.sendAuthStateChangeNotification(res.isAuthSuccessful);
//         this.router.navigate([this.returnUrl]);
//       },
//       error: (err: HttpErrorResponse) => {
//         this.errorMessage = err.message;
//         this.showError = true;
//         this.userService.signOutExternal();
//       },
//     });
//   }
// }
