import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AvatarComponent } from '../avatar/avatar.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonFabDirective } from '../button/directives/button-fab.directive';

@Component({
  selector: 'app-navbar',
  imports: [AvatarComponent, ButtonComponent, ButtonFabDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() public userIsLogged: boolean = false;

  constructor(private router: Router) {}

  public redirectToUserCreation(): void {
    this.router.navigateByUrl('/user/register');
  }
}
