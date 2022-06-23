import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelSCLEgalHolidayAddComponent } from './tblshamel-sc-legal-holiday-add.component';

describe('TBLShamelSCLEgalHolidayAddComponent', () => {
  let component: TBLShamelSCLEgalHolidayAddComponent;
  let fixture: ComponentFixture<TBLShamelSCLEgalHolidayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelSCLEgalHolidayAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelSCLEgalHolidayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
