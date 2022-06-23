import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblShamelOvertimePrintTotalsListComponent } from './tbl-shamel-overtime-print-totals-list.component';

describe('TblShamelOvertimePrintTotalsListComponent', () => {
  let component: TblShamelOvertimePrintTotalsListComponent;
  let fixture: ComponentFixture<TblShamelOvertimePrintTotalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblShamelOvertimePrintTotalsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblShamelOvertimePrintTotalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
