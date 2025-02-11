import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ButtonBasicDirective } from '../../../shared/components/button/directives/button-basic.directive';
import { ButtonStrokedDirective } from '../../../shared/components/button/directives/button-stroked.directive';
import { FormfieldEmailComponent } from '../../../shared/components/formfields/formfield-email/formfield-email.component';
import { FormfieldTextComponent } from '../../../shared/components/formfields/formfield-text/formfield-text.component';

@Component({
  selector: 'app-user-form',
  imports: [
    ButtonBasicDirective,
    ButtonComponent,
    ButtonStrokedDirective,
    CommonModule,
    FormfieldEmailComponent,
    FormfieldTextComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() dispatchFormSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.createForm();
  }

  public clearForm(): void {
    this.userForm.reset();
  }

  public formIsValid(): boolean {
    return this.userForm.valid && !!this.name && !!this.email;
  }

  public onSubmit(): void {
    this.dispatchFormSubmit.emit(this.userForm);
  }

  public get name(): string | undefined {
    return this.userForm.get('name')?.value;
  }

  public get email(): string | undefined {
    return this.userForm.get('email')?.value;
  }

  public get nameControl(): FormControl<string | undefined> {
    return this.userForm.get('name') as FormControl<string | undefined>;
  }

  public get emailControl(): FormControl<string | undefined> {
    return this.userForm.get('email') as FormControl<string | undefined>;
  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl<string | undefined>(undefined),
      name: new FormControl<string | undefined>(undefined),
    });
  }
}
