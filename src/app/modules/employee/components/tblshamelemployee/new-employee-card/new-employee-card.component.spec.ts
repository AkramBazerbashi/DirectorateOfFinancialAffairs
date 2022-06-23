import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeCardComponent } from './new-employee-card.component';

describe('NewEmployeeCardComponent', () => {
  let component: NewEmployeeCardComponent;
  let fixture: ComponentFixture<NewEmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
