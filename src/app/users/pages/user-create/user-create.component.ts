import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../../shared/services/cookie.service';

@Component({
  selector: 'app-user-create',
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent implements OnInit {
  constructor(private readonly cookieService: CookieService) {}

  ngOnInit(): void {
    const sessionId = this.cookieService.getCookie('sessionId');
    console.log('Session ID:', sessionId);
  }
}
