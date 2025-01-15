import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ButtonBasic]',
})
export class ButtonBasicDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('btn-basic');
    } else {
      console.warn('Button Basic directive can only be used with button elements');
    }
  }
}
