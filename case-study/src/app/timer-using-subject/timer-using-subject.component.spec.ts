import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerUsingSubjectComponent } from './timer-using-subject.component';

describe('TimerUsingSubjectComponent', () => {
  let component: TimerUsingSubjectComponent;
  let fixture: ComponentFixture<TimerUsingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerUsingSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerUsingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
