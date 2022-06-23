import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblShamelOvertimeShatebModifyComponent } from './tbl-shamel-overtime-shateb-modify.component';

describe('TblShamelOvertimeShatebModifyComponent', () => {
  let component: TblShamelOvertimeShatebModifyComponent;
  let fixture: ComponentFixture<TblShamelOvertimeShatebModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblShamelOvertimeShatebModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblShamelOvertimeShatebModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
