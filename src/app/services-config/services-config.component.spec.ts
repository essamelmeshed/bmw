import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesConfigComponent } from './services-config.component';

describe('ServicesConfigComponent', () => {
  let component: ServicesConfigComponent;
  let fixture: ComponentFixture<ServicesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
