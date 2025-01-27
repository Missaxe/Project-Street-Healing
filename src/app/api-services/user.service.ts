import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/User/user';
import { Subject } from 'rxjs';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { ExternalAuthDto } from '../models/google-external-auth/ExternalAuthDto';
import { AuthResponseDto } from '../models/google-external-auth-response-dto/AuthResponseDto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authChangeSub = new Subject<boolean>();
  private extAuthChangeSub = new Subject<SocialUser>();
  public authChanged = this.authChangeSub.asObservable();
  public extAuthChanged = this.extAuthChangeSub.asObservable();
  private apiUrlRegister = `${environment.apiUserRegister}/register`;
  private apiUrlLogin = `${environment.apiLUserLogin}/authenticate`;
  private apiGoogleSignUp = `${environment.apiGoogle}/register`;
  public isExternalAuth: boolean = false;

  constructor(
    private http: HttpClient,
    private externalAuthService: SocialAuthService
  ) {
    this.externalAuthService.authState.subscribe((user) => {
      const externalAuth: ExternalAuthDto = {
        provider: user.provider,
        idToken: user.idToken,
      };
      console.log(user);
      this.extAuthChangeSub.next(user);
      this.isExternalAuth = true;
      this.externalLogin(externalAuth).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.sendAuthStateChangeNotification(res.isAuthSuccessful);
        },
        error: () => {
          this.signOutExternal();
        },
      });
    });
  }

  createUser(user: User): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrlRegister, user);
  }

  loginUser(user: User): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.apiUrlLogin, user);
  }

  public signInWithGoogle = () => {
    this.externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  };

  public signOutExternal = () => {
    this.externalAuthService.signOut();
  };

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  };

  public externalLogin = (body: ExternalAuthDto) => {
    return this.http.post<AuthResponseDto>(this.apiGoogleSignUp, body);
  };
}
