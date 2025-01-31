import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ButtonFab]',
})
export class ButtonFabDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('btn-fab');
    } else {
      console.warn('Button FAb directive can only be used with button elements');
    }
  }
}
