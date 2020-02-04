import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Designation2Component } from './designation2.component';

describe('Designation2Component', () => {
  let component: Designation2Component;
  let fixture: ComponentFixture<Designation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Designation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Designation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
