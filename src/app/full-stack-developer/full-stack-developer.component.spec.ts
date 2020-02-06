import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackDeveloperComponent } from './full-stack-developer.component';

describe('FullStackDeveloperComponent', () => {
  let component: FullStackDeveloperComponent;
  let fixture: ComponentFixture<FullStackDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullStackDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
