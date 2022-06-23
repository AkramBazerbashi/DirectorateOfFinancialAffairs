import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscjobstatemodifyComponent } from './tblshamelscjobstatemodify.component';

describe('TblshamelscjobstatemodifyComponent', () => {
  let component: TblshamelscjobstatemodifyComponent;
  let fixture: ComponentFixture<TblshamelscjobstatemodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscjobstatemodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscjobstatemodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
