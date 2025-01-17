import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-masthead',
  imports: [],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.scss',
})
export class MastheadComponent {
  @Input() color: 'default' | 'success' | 'error' = 'default';
  @Input() customClass!: string;
  @Input() subtitle!: string;
  @Input() title!: string;

  public get class(): string {
    return ['masthead w-100', this.customClass, this.color].filter(Boolean).join(' ');
  }

  public get iconClass(): string {
    return ['masthead-back-icon', this.color].filter(Boolean).join(' ');
  }

  public back(): void {
    history.back();
  }
}
