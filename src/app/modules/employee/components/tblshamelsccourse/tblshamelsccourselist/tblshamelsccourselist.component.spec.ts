import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelsccourselistComponent } from './tblshamelsccourselist.component';

describe('TblshamelsccourselistComponent', () => {
  let component: TblshamelsccourselistComponent;
  let fixture: ComponentFixture<TblshamelsccourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelsccourselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelsccourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
