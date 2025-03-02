import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-profile,[app-profile],.app-profile:not(p)',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
