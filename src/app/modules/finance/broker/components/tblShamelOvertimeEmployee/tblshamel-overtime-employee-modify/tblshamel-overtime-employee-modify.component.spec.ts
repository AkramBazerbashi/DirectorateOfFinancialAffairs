import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelOvertimeEmployeeModifyComponent } from './tblshamel-overtime-employee-modify.component';

describe('TBLShamelOvertimeEmployeeModifyComponent', () => {
  let component: TBLShamelOvertimeEmployeeModifyComponent;
  let fixture: ComponentFixture<TBLShamelOvertimeEmployeeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelOvertimeEmployeeModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TBLShamelOvertimeEmployeeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
