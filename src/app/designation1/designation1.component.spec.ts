import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Designation1Component } from './designation1.component';

describe('Designation1Component', () => {
  let component: Designation1Component;
  let fixture: ComponentFixture<Designation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Designation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Designation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
