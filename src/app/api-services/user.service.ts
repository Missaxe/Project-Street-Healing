import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

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

  constructor(
    private http: HttpClient,
    private externalAuthService: SocialAuthService
  ) {
    this.externalAuthService.authState.subscribe((user) => {
      console.log(user);
      this.extAuthChangeSub.next(user);
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
}
