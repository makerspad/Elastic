import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrFullStackDeveloperComponent } from './sr-full-stack-developer.component';

describe('SrFullStackDeveloperComponent', () => {
  let component: SrFullStackDeveloperComponent;
  let fixture: ComponentFixture<SrFullStackDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrFullStackDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrFullStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
