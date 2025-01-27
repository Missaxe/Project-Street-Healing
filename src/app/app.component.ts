import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { User } from './models/User/user';
// import { Subject } from 'rxjs';
// import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
// import { ExternalAuthDto } from '../app/models/google-external-auth/ExternalAuthDto';
// import { AuthResponseDto } from '../app/models/google-external-auth-response-dto/AuthResponseDto';
// import { UserService } from './api-services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SocialLoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Street.Healing.Clients';
  // private authChangeSub = new Subject<boolean>();
  // private extAuthChangeSub = new Subject<SocialUser>();
  // public authChanged = this.authChangeSub.asObservable();
  // public extAuthChanged = this.extAuthChangeSub.asObservable();
  // public isExternalAuth: boolean = false;

  // constructor(
  //   private http: HttpClient,
  //   private externalAuthService: SocialAuthService,
  //   private userService: UserService
  // ) {
  //   this.externalAuthService.authState.subscribe((user) => {
  //     const externalAuth: ExternalAuthDto = {
  //       provider: user.provider,
  //       idToken: user.idToken,
  //     };
  //     console.log(user);
  //     this.extAuthChangeSub.next(user);
  //     this.isExternalAuth = true;
  //     this.userService.externalLogin(externalAuth).subscribe({
  //       next: (res) => {
  //         localStorage.setItem('token', res.token);
  //         this.userService.sendAuthStateChangeNotification(
  //           res.isAuthSuccessful
  //         );
  //       },
  //       error: () => {
  //         this.userService.signOutExternal();
  //       },
  //     });
  //   });
  // }
}
