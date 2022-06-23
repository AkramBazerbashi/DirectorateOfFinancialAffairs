import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelsceducationlistComponent } from './tblshamelsceducationlist.component';

describe('TblshamelsceducationlistComponent', () => {
  let component: TblshamelsceducationlistComponent;
  let fixture: ComponentFixture<TblshamelsceducationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelsceducationlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelsceducationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
