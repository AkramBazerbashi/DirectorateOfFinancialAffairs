import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchBarComponent } from './employee-search-bar.component';

describe('EmployeeSearchBarComponent', () => {
  let component: EmployeeSearchBarComponent;
  let fixture: ComponentFixture<EmployeeSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
