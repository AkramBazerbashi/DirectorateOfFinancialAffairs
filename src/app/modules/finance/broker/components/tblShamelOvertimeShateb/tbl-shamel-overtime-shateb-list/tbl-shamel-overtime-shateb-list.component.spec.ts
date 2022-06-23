import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblShamelOvertimeShatebListComponent } from './tbl-shamel-overtime-shateb-list.component';

describe('TblShamelOvertimeShatebListComponent', () => {
  let component: TblShamelOvertimeShatebListComponent;
  let fixture: ComponentFixture<TblShamelOvertimeShatebListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblShamelOvertimeShatebListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblShamelOvertimeShatebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
