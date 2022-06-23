import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelcertificatemodifyComponent } from './tblshamelcertificatemodify.component';

describe('TblshamelcertificatemodifyComponent', () => {
  let component: TblshamelcertificatemodifyComponent;
  let fixture: ComponentFixture<TblshamelcertificatemodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelcertificatemodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelcertificatemodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
