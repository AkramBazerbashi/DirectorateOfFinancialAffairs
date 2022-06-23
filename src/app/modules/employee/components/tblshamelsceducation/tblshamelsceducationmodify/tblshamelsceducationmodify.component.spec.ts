import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblshamelsceducationmodifyComponent } from './tblshamelsceducationmodify.component';

describe('TblshamelsceducationmodifyComponent', () => {
  let component: TblshamelsceducationmodifyComponent;
  let fixture: ComponentFixture<TblshamelsceducationmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblshamelsceducationmodifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblshamelsceducationmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
