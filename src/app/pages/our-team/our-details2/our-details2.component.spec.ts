import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDetails2Component } from './our-details2.component';

describe('OurDetails2Component', () => {
  let component: OurDetails2Component;
  let fixture: ComponentFixture<OurDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
