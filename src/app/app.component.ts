import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SocialLoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Street.Healing.Clients';
}
