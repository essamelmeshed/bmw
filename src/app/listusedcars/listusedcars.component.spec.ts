import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusedcarsComponent } from './listusedcars.component';

describe('ListusedcarsComponent', () => {
  let component: ListusedcarsComponent;
  let fixture: ComponentFixture<ListusedcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListusedcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListusedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
