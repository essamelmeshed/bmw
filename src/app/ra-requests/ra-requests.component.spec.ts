import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaRequestsComponent } from './ra-requests.component';

describe('RaRequestsComponent', () => {
  let component: RaRequestsComponent;
  let fixture: ComponentFixture<RaRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
