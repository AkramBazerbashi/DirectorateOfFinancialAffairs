import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelschealthholidayListComponent } from './tblshamelschealthholiday-list.component';

describe('TblshamelschealthholidayListComponent', () => {
  let component: TblshamelschealthholidayListComponent;
  let fixture: ComponentFixture<TblshamelschealthholidayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelschealthholidayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelschealthholidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
