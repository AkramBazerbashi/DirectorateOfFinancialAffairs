import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelsccancelpunishmentmodifyComponent } from './tblshamelsccancelpunishmentmodify.component';

describe('TblshamelsccancelpunishmentmodifyComponent', () => {
  let component: TblshamelsccancelpunishmentmodifyComponent;
  let fixture: ComponentFixture<TblshamelsccancelpunishmentmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelsccancelpunishmentmodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelsccancelpunishmentmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
