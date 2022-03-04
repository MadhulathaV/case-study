import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timeLeft = new Subject<any>();
  startCount = new Subject<any>();
  pauseCount = new Subject<any>();
  timeTrack = new Subject<any>();

  constructor() { }
}
