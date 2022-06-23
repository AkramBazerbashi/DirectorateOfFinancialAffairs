import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelincmarsoommodifyComponent } from './tblshamelincmarsoommodify.component';

describe('TblshamelincmarsoommodifyComponent', () => {
  let component: TblshamelincmarsoommodifyComponent;
  let fixture: ComponentFixture<TblshamelincmarsoommodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelincmarsoommodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelincmarsoommodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
