import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteemployeeComponent } from './deleteemployee.component';

describe('DeleteemployeeComponent', () => {
  let component: DeleteemployeeComponent;
  let fixture: ComponentFixture<DeleteemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
});
