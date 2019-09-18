import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmodelConfigComponent } from './tdmodel-config.component';

describe('TdmodelConfigComponent', () => {
  let component: TdmodelConfigComponent;
  let fixture: ComponentFixture<TdmodelConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmodelConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmodelConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
