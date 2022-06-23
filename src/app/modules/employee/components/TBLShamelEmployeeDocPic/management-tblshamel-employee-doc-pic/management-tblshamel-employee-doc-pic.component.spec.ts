import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTBLShamelEmployeeDocPicComponent } from './management-tblshamel-employee-doc-pic.component';

describe('ManagementTBLShamelEmployeeDocPicComponent', () => {
  let component: ManagementTBLShamelEmployeeDocPicComponent;
  let fixture: ComponentFixture<ManagementTBLShamelEmployeeDocPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTBLShamelEmployeeDocPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTBLShamelEmployeeDocPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
