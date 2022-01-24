import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalSoftwareComponent } from './clinical-software.component';

describe('ClinicalSoftwareComponent', () => {
  let component: ClinicalSoftwareComponent;
  let fixture: ComponentFixture<ClinicalSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
