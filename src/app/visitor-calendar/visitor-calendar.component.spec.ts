import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorCalendarComponent } from './visitor-calendar.component';

describe('VisitorCalendarComponent', () => {
  let component: VisitorCalendarComponent;
  let fixture: ComponentFixture<VisitorCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitorCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
