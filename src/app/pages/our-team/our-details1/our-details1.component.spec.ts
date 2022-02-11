import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDetails1Component } from './our-details1.component';

describe('OurDetails1Component', () => {
  let component: OurDetails1Component;
  let fixture: ComponentFixture<OurDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
