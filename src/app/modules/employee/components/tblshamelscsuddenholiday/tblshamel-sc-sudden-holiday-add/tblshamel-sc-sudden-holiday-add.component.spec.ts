import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelSCSuddenHolidayAddComponent } from './tblshamel-sc-sudden-holiday-add.component';

describe('TBLShamelSCSuddenHolidayAddComponent', () => {
  let component: TBLShamelSCSuddenHolidayAddComponent;
  let fixture: ComponentFixture<TBLShamelSCSuddenHolidayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelSCSuddenHolidayAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelSCSuddenHolidayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
