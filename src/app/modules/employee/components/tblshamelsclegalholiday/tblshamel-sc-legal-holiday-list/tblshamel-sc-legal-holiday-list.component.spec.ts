import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelSCLEgalHolidayListComponent } from './tblshamel-sc-legal-holiday-list.component';

describe('TBLShamelSCLEgalHolidayListComponent', () => {
  let component: TBLShamelSCLEgalHolidayListComponent;
  let fixture: ComponentFixture<TBLShamelSCLEgalHolidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelSCLEgalHolidayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelSCLEgalHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
