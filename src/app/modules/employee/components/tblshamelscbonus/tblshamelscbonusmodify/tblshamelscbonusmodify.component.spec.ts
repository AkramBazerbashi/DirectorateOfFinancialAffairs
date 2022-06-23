import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscbonusmodifyComponent } from './tblshamelscbonusmodify.component';

describe('TblshamelscbonusmodifyComponent', () => {
  let component: TblshamelscbonusmodifyComponent;
  let fixture: ComponentFixture<TblshamelscbonusmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscbonusmodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscbonusmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
