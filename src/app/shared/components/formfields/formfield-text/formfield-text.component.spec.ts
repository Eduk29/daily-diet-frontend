import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldTextComponent } from './formfield-text.component';

describe('FormfieldTextComponent', () => {
  let component: FormfieldTextComponent;
  let fixture: ComponentFixture<FormfieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfieldTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
