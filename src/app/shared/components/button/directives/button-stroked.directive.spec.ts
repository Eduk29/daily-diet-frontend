import { ElementRef } from '@angular/core';

import { ButtonStrokedDirective } from './button-stroked.directive';

describe('ButtonStrokedDirective', () => {
  it('should create an instance', () => {
    const eleRef = { nativeElement: document.createElement('div') };
    const directive = new ButtonStrokedDirective(eleRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
