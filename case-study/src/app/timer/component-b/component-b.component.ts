import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.timer.valueChanges.subscribe(val => {
      if (this.startFlag) {
        this.timeLeft = val;
      }
    })
  }

  startTimer() {
    this.timeTrack.push(new Date());
    if (this.startFlag) {
      this.startCount++;
      this.sendTimerData.emit({
        timeLeft: this.timeLeft,
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        timeTrack: this.timeTrack
      });
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          console.log(this.timeLeft)
          this.sendTimerData.emit({
            timeLeft: this.timeLeft,
            startCount: this.startCount,
            pauseCount: this.pauseCount,
            timeTrack: this.timeTrack
          });
        }
      }, 1000)
    } else {
      this.pauseCount++;
      this.pauseTrack.push(this.timeLeft);
      clearInterval(this.interval)
      this.sendTimerData.emit({
        timeLeft: this.timeLeft,
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        timeTrack: this.timeTrack
      });
    }
    this.startFlag = !this.startFlag;
  }

  reset() {
    this.startFlag = true;
    this.timer.patchValue('');
    this.timeLeft = 0;
    this.sendTimerData.emit({
      timeLeft: this.timeLeft,
      startCount: this.startCount,
      pauseCount: this.pauseCount,
      timeTrack: this.timeTrack
    });
  }

}
