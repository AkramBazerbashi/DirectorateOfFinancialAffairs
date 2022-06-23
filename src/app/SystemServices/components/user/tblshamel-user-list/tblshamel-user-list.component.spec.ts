import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBLShamelUserListComponent } from './tblshamel-user-list.component';

describe('TBLShamelUserListComponent', () => {
  let component: TBLShamelUserListComponent;
  let fixture: ComponentFixture<TBLShamelUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBLShamelUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBLShamelUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
