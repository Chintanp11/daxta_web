import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDetailsComponent } from './our-details.component';

describe('OurDetailsComponent', () => {
  let component: OurDetailsComponent;
  let fixture: ComponentFixture<OurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
