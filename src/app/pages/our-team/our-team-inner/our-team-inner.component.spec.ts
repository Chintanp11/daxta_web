import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamInnerComponent } from './our-team-inner.component';

describe('OurTeamInnerComponent', () => {
  let component: OurTeamInnerComponent;
  let fixture: ComponentFixture<OurTeamInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
