import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelscmergeserviceListComponent } from './tblshamelscmergeservice-list.component';

describe('TblshamelscmergeserviceListComponent', () => {
  let component: TblshamelscmergeserviceListComponent;
  let fixture: ComponentFixture<TblshamelscmergeserviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelscmergeserviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelscmergeserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
