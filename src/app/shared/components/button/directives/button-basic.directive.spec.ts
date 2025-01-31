import { ElementRef } from '@angular/core';

import { ButtonBasicDirective } from './button-basic.directive';

describe('ButtonBasicDirective', () => {
  it('should create an instance', () => {
    const eleRef = { nativeElement: document.createElement('div') };
    const directive = new ButtonBasicDirective(eleRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
