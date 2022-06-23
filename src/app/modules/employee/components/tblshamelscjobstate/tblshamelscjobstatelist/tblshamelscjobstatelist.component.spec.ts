import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscjobstatelistComponent } from './tblshamelscjobstatelist.component';

describe('TblshamelscjobstatelistComponent', () => {
  let component: TblshamelscjobstatelistComponent;
  let fixture: ComponentFixture<TblshamelscjobstatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscjobstatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscjobstatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
