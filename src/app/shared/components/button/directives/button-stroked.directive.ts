import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ButtonStroked]',
  standalone: true,
})
export class ButtonStrokedDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('btn-stroked');
    } else {
      console.warn('Button Stroked directive can only be used with button elements');
    }
  }
}
