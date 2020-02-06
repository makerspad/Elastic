import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrUserExperienceDesignerComponent } from './sr-user-experience-designer.component';

describe('SrUserExperienceDesignerComponent', () => {
  let component: SrUserExperienceDesignerComponent;
  let fixture: ComponentFixture<SrUserExperienceDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrUserExperienceDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrUserExperienceDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
