import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  public isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleUserMenu(event: Event) {
    event.stopPropagation(); // Evita o fechamento imediato ao clicar no botão
    this.isMenuOpen = !this.isMenuOpen;
  }

  public logout(): void {
    // TODO: implement cookie reset
    // TODO: reset user data
    // TODO: implement redirect to login page
    console.log('Implement Logout...');
  }

  public redirectToProfile(): void {
    console.log('Cliquei no perfil');
    this.router.navigate(['/profile']);
  }

  @HostListener('document:click', ['$event'])
  closeMenu() {
    this.isMenuOpen = false;
  }
}
