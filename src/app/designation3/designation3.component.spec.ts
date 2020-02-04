import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Designation3Component } from './designation3.component';

describe('Designation3Component', () => {
  let component: Designation3Component;
  let fixture: ComponentFixture<Designation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Designation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Designation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
