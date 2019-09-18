import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveRequestsComponent } from './test-drive-requests.component';

describe('TestDriveRequestsComponent', () => {
  let component: TestDriveRequestsComponent;
  let fixture: ComponentFixture<TestDriveRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDriveRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
