/* tslint:disable:no-unused-variable */
import { ElementRef } from '@angular/core';

import { ButtonFabDirective } from './button-fab.directive';

describe('Directive: ButtonFab', () => {
  it('should create an instance', () => {
    const eleRef = { nativeElement: document.createElement('div') };
    const directive = new ButtonFabDirective(eleRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
