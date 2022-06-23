import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDepartmentComponent } from './employees-department.component';

describe('EmployeesDepartmentComponent', () => {
  let component: EmployeesDepartmentComponent;
  let fixture: ComponentFixture<EmployeesDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
