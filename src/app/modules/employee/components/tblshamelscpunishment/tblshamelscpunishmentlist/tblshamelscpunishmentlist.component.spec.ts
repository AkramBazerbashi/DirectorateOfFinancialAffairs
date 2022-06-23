import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscpunishmentlistComponent } from './tblshamelscpunishmentlist.component';

describe('TblshamelscpunishmentlistComponent', () => {
  let component: TblshamelscpunishmentlistComponent;
  let fixture: ComponentFixture<TblshamelscpunishmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscpunishmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscpunishmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
