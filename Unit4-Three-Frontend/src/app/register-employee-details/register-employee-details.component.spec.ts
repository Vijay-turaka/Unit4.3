import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeeDetailsComponent } from './register-employee-details.component';

describe('RegisterEmployeeDetailsComponent', () => {
  let component: RegisterEmployeeDetailsComponent;
  let fixture: ComponentFixture<RegisterEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
