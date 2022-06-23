import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelSCSuddenHolidayComponent } from './tblshamel-sc-sudden-holiday.component';

describe('TBLShamelSCSuddenHolidayComponent', () => {
  let component: TBLShamelSCSuddenHolidayComponent;
  let fixture: ComponentFixture<TBLShamelSCSuddenHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelSCSuddenHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelSCSuddenHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
