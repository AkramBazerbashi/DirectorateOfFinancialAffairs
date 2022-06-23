import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelEmployeeDocPicComponent } from './tblshamel-employee-doc-pic.component';

describe('TBLShamelEmployeeDocPicComponent', () => {
  let component: TBLShamelEmployeeDocPicComponent;
  let fixture: ComponentFixture<TBLShamelEmployeeDocPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelEmployeeDocPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelEmployeeDocPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
