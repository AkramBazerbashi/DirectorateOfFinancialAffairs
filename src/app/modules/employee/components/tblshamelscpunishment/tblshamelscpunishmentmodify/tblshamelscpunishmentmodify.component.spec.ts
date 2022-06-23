import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscpunishmentmodifyComponent } from './tblshamelscpunishmentmodify.component';

describe('TblshamelscpunishmentmodifyComponent', () => {
  let component: TblshamelscpunishmentmodifyComponent;
  let fixture: ComponentFixture<TblshamelscpunishmentmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscpunishmentmodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscpunishmentmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
