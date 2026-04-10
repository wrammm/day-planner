import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTimeline } from './day-timeline';

describe('DayTimeline', () => {
  let component: DayTimeline;
  let fixture: ComponentFixture<DayTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(DayTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
