import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CookieService } from './shared/services/cookie.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public userIsLogged = false;

  constructor(private readonly cookieService: CookieService) {}

  ngOnInit(): void {
    const sessionId = this.cookieService.getCookie('sessionId');
    this.userIsLogged = !!sessionId;
  }
}
