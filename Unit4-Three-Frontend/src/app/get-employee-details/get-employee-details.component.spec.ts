import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeDetailsComponent } from './get-employee-details.component';

describe('GetEmployeeDetailsComponent', () => {
  let component: GetEmployeeDetailsComponent;
  let fixture: ComponentFixture<GetEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
