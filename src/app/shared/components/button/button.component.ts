import { AfterViewChecked, Component, ElementRef, EventEmitter, Injector, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements AfterViewChecked {
  @Input() public color: 'default' | 'success' | 'error' = 'default';
  @Input() public customClass!: string;
  @Input() public disabled = false;
  @Input() public iconColor: 'default' | 'inverse' | 'success' | 'error' = 'default';
  @Input() public iconName!: string;
  @Input() public label!: string;
  @Input() public type!: 'button' | 'submit' | 'reset';

  @Output() public clickEvent = new EventEmitter<void>();

  private router!: Router;

  constructor(
    private injector: Injector,
    private elementRef: ElementRef
  ) {
    this.router = this.injector.get(Router);
  }

  ngAfterViewChecked() {
    if (this.isFabButton) {
      const buttonElement: HTMLElement[] = Array.from(this.elementRef.nativeElement.children[0].children);
      buttonElement.forEach((element: HTMLElement) => {
        if (element.tagName === 'P') {
          element.classList.add('d-none');
        }
      });
    }
  }

  public get class(): string {
    return this.customClass ? `btn ${this.color} ${this.customClass}` : `btn ${this.color}`;
  }

  public dispatchClickEvent(): void {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }

  private get isFabButton(): boolean {
    return this.elementRef.nativeElement.children[0].classList.contains('btn-fab');
  }
}
