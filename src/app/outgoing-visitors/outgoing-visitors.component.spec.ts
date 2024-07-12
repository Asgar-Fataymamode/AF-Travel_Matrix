import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingVisitorsComponent } from './outgoing-visitors.component';

describe('OutgoingVisitorsComponent', () => {
  let component: OutgoingVisitorsComponent;
  let fixture: ComponentFixture<OutgoingVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutgoingVisitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutgoingVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
