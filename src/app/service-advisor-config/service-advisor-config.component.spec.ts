import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdvisorConfigComponent } from './service-advisor-config.component';

describe('ServiceAdvisorConfigComponent', () => {
  let component: ServiceAdvisorConfigComponent;
  let fixture: ComponentFixture<ServiceAdvisorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdvisorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdvisorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
