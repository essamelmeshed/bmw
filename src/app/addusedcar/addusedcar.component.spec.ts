import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusedcarComponent } from './addusedcar.component';

describe('AddusedcarComponent', () => {
  let component: AddusedcarComponent;
  let fixture: ComponentFixture<AddusedcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusedcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
