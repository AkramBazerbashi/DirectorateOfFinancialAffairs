import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSeachDialogComponent } from './employee-seach-dialog.component';

describe('EmployeeSeachDialogComponent', () => {
  let component: EmployeeSeachDialogComponent;
  let fixture: ComponentFixture<EmployeeSeachDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSeachDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSeachDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
