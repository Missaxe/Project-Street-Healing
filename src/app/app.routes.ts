import { Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { MainContentComponent } from './main-content/main-content.component';
// import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';

export const routes: Routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'sendotp/:id', component: SendOtpComponent },
  { path: 'home', component: MainContentComponent },
  // { path: 'google', component: GoogleSignInComponent },
];
