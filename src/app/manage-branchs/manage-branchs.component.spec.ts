import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBranchsComponent } from './manage-branchs.component';

describe('ManageBranchsComponent', () => {
  let component: ManageBranchsComponent;
  let fixture: ComponentFixture<ManageBranchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBranchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBranchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
