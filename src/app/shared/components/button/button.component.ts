import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public clickEventHandler!: () => void;
  @Input() public color: 'default' | 'success' | 'error' = 'default';
  @Input() public customClass!: string;
  @Input() public iconColor: 'default' | 'success' | 'error' = 'default';
  @Input() public iconName!: string;
  @Input() public label!: string;
  @Input() public type!: 'button' | 'submit' | 'reset';

  public get class(): string {
    return this.customClass ? `btn px-4 py-4 ${this.color} ${this.customClass}` : `btn px-4 py-4 ${this.color}`;
  }

  public clickEvent(): void {
    if (this.clickEventHandler) {
      this.clickEventHandler();
    }
  }
}
