import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscbonuslistComponent } from './tblshamelscbonuslist.component';

describe('TblshamelscbonuslistComponent', () => {
  let component: TblshamelscbonuslistComponent;
  let fixture: ComponentFixture<TblshamelscbonuslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscbonuslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscbonuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
