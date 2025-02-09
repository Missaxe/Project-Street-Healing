import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-container.component.html',
  styleUrl: './header-container.component.css',
})
export class HeaderContainerComponent {}
