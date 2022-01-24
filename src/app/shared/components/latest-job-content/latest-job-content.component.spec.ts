import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobContentComponent } from './latest-job-content.component';

describe('LatestJobContentComponent', () => {
  let component: LatestJobContentComponent;
  let fixture: ComponentFixture<LatestJobContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestJobContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestJobContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
