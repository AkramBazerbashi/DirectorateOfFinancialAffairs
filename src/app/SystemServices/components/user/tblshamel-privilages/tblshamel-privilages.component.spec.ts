import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelPrivilagesComponent } from './tblshamel-privilages.component';

describe('TBLShamelPrivilagesComponent', () => {
  let component: TBLShamelPrivilagesComponent;
  let fixture: ComponentFixture<TBLShamelPrivilagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelPrivilagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelPrivilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
