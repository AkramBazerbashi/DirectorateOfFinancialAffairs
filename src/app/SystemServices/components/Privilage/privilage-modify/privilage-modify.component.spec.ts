import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilageModifyComponent } from './privilage-modify.component';

describe('PrivilageModifyComponent', () => {
  let component: PrivilageModifyComponent;
  let fixture: ComponentFixture<PrivilageModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilageModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilageModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
