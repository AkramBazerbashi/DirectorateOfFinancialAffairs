import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeCardComponent } from './edit-employee-card.component';

describe('EditEmployeeCardComponent', () => {
  let component: EditEmployeeCardComponent;
  let fixture: ComponentFixture<EditEmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
