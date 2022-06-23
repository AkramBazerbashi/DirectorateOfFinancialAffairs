import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeechangeidComponent } from './employeechangeid.component';

describe('EmployeechangeidComponent', () => {
  let component: EmployeechangeidComponent;
  let fixture: ComponentFixture<EmployeechangeidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeechangeidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeechangeidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
