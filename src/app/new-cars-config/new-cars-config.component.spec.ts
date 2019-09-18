import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsConfigComponent } from './new-cars-config.component';

describe('NewCarsConfigComponent', () => {
  let component: NewCarsConfigComponent;
  let fixture: ComponentFixture<NewCarsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
