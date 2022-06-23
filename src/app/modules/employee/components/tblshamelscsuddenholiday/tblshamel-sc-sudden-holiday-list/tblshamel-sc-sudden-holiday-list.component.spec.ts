import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelSCSuddenHolidayListComponent } from './tblshamel-sc-sudden-holiday-list.component';

describe('TBLShamelSCSuddenHolidayListComponent', () => {
  let component: TBLShamelSCSuddenHolidayListComponent;
  let fixture: ComponentFixture<TBLShamelSCSuddenHolidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelSCSuddenHolidayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelSCSuddenHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
