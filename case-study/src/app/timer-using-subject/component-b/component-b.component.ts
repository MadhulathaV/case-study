import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  count: any;
  timer: FormControl = new FormControl();
  startFlag = true;
  interval: any;
  timeLeft: any = 0;
  @Output() sendTimerData = new EventEmitter<any>();
  startCount = 0;
  pauseCount = 0;
  pauseTrack: number[] = [];
  timeTrack: Date[] = [];

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.timer.valueChanges.subscribe(val => {
      if (this.startFlag) {
        this.timeLeft = val;
      }
    })
  }

  startTimer() {
    this.timeTrack.push(new Date());
    this.service.timeTrack.next(this.timeTrack);
    if (this.startFlag) {
      this.startCount++;
      this.service.timeLeft.next(this.timeLeft);
      this.service.startCount.next(this.startCount);
      /*this.sendTimerData.emit({
        timeLeft: this.timeLeft,
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        timeTrack: this.timeTrack
      });*/
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          console.log(this.timeLeft)
          this.service.timeLeft.next(this.timeLeft);
          /*this.sendTimerData.emit({
            timeLeft: this.timeLeft,
            startCount: this.startCount,
            pauseCount: this.pauseCount,
            timeTrack: this.timeTrack
          });*/
        }
      }, 1000)
    } else {
      this.pauseCount++;
      this.pauseTrack.push(this.timeLeft);
      clearInterval(this.interval)
      this.service.timeLeft.next(this.timeLeft);
      this.service.pauseCount.next(this.pauseCount);
      /*this.sendTimerData.emit({
        timeLeft: this.timeLeft,
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        timeTrack: this.timeTrack
      });*/
    }
    this.startFlag = !this.startFlag;
  }

  reset() {
    this.startFlag = true;
    this.timer.patchValue('');
    this.timeLeft = 0;
    this.service.timeLeft.next(this.timeLeft);
    /*this.sendTimerData.emit({
      timeLeft: this.timeLeft,
      startCount: this.startCount,
      pauseCount: this.pauseCount,
      timeTrack: this.timeTrack
    });*/
  }

}
