import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelincmarsoomlistComponent } from './tblshamelincmarsoomlist.component';

describe('TblshamelincmarsoomlistComponent', () => {
  let component: TblshamelincmarsoomlistComponent;
  let fixture: ComponentFixture<TblshamelincmarsoomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelincmarsoomlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelincmarsoomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
