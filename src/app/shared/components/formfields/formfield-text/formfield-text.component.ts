import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FormfieldLabelPositionType } from '../types/formfield-label-position.type';

@Component({
  selector: 'app-formfield-text',
  imports: [ReactiveFormsModule],
  templateUrl: './formfield-text.component.html',
  styleUrl: './formfield-text.component.scss',
})
export class FormfieldTextComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() controlName!: FormControl<unknown>;
  @Input() hint!: string;
  @Input() label!: string;
  @Input() labelPosition: FormfieldLabelPositionType = 'before';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    if (!this.controlName) {
      console.warn('FormfieldTextComponent: controlName is required');
    }

    if (!this.label) {
      console.warn('FormfieldTextComponent: label is required');
    }
  }

  public get labelFor(): string {
    return `${this.label}_input`;
  }

  public get labelPositionClass(): string {
    return this.labelPosition === 'before' ? 'label-before' : 'label-above';
  }
}
