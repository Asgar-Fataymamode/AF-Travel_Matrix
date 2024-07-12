import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthcomingVisitorsComponent } from './forthcoming-visitors.component';

describe('ForthcomingVisitorsComponent', () => {
  let component: ForthcomingVisitorsComponent;
  let fixture: ComponentFixture<ForthcomingVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForthcomingVisitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthcomingVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
