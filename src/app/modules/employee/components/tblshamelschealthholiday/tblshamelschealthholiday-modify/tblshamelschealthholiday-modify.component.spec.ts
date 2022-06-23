import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelschealthholidayModifyComponent } from './tblshamelschealthholiday-modify.component';

describe('TblshamelschealthholidayModifyComponent', () => {
  let component: TblshamelschealthholidayModifyComponent;
  let fixture: ComponentFixture<TblshamelschealthholidayModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelschealthholidayModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelschealthholidayModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
