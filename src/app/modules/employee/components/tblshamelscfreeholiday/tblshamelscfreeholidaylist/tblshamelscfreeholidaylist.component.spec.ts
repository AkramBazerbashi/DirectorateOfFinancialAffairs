import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscfreeholidaylistComponent } from './tblshamelscfreeholidaylist.component';

describe('TblshamelscfreeholidaylistComponent', () => {
  let component: TblshamelscfreeholidaylistComponent;
  let fixture: ComponentFixture<TblshamelscfreeholidaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscfreeholidaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscfreeholidaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
