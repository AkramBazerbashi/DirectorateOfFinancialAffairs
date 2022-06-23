import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpShowDataComponent } from './emp-show-data.component';

describe('EmpShowDataComponent', () => {
  let component: EmpShowDataComponent;
  let fixture: ComponentFixture<EmpShowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpShowDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
