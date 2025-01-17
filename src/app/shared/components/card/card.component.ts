import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() public color: 'default' | 'success' | 'error' = 'default';
  @Input() public customClass!: string;

  public get class(): string {
    return ['card', this.customClass, this.color].filter(Boolean).join(' ');
  }
}
