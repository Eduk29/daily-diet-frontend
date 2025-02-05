import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldEmailComponent } from './formfield-email.component';

describe('FormfieldEmailComponent', () => {
  let component: FormfieldEmailComponent;
  let fixture: ComponentFixture<FormfieldEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfieldEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
