import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCarsConfigComponent } from './used-cars-config.component';

describe('UsedCarsConfigComponent', () => {
  let component: UsedCarsConfigComponent;
  let fixture: ComponentFixture<UsedCarsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedCarsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedCarsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
