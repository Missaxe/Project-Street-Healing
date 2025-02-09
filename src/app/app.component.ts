import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { HeaderContainerComponent } from './header-container/header-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialLoginModule, HeaderContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Street.Healing.Clients';
}
