import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelsccoursemodifyComponent } from './tblshamelsccoursemodify.component';

describe('TblshamelsccoursemodifyComponent', () => {
  let component: TblshamelsccoursemodifyComponent;
  let fixture: ComponentFixture<TblshamelsccoursemodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelsccoursemodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelsccoursemodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
