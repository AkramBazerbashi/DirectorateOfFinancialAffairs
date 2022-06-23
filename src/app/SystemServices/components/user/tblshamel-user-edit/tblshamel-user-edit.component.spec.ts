import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelUserEditComponent } from './tblshamel-user-edit.component';

describe('TBLShamelUserEditComponent', () => {
  let component: TBLShamelUserEditComponent;
  let fixture: ComponentFixture<TBLShamelUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelUserEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
