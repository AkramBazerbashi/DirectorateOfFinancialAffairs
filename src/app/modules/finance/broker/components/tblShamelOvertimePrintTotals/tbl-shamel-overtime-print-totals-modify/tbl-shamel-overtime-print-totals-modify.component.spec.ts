import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblShamelOvertimePrintTotalsModifyComponent } from './tbl-shamel-overtime-print-totals-modify.component';

describe('TblShamelOvertimePrintTotalsModifyComponent', () => {
  let component: TblShamelOvertimePrintTotalsModifyComponent;
  let fixture: ComponentFixture<TblShamelOvertimePrintTotalsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblShamelOvertimePrintTotalsModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblShamelOvertimePrintTotalsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
