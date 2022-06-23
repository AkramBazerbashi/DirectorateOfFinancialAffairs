import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscfreeholidaymodifyComponent } from './tblshamelscfreeholidaymodify.component';

describe('TblshamelscfreeholidaymodifyComponent', () => {
  let component: TblshamelscfreeholidaymodifyComponent;
  let fixture: ComponentFixture<TblshamelscfreeholidaymodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscfreeholidaymodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscfreeholidaymodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
