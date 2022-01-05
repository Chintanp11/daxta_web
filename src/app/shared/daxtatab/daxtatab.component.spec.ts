import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaxtatabComponent } from './daxtatab.component';

describe('DaxtatabComponent', () => {
  let component: DaxtatabComponent;
  let fixture: ComponentFixture<DaxtatabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaxtatabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaxtatabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
