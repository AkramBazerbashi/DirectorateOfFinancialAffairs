import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscmergeserviceModifyComponent } from './tblshamelscmergeservice-modify.component';

describe('TblshamelscmergeserviceModifyComponent', () => {
  let component: TblshamelscmergeserviceModifyComponent;
  let fixture: ComponentFixture<TblshamelscmergeserviceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscmergeserviceModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscmergeserviceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
