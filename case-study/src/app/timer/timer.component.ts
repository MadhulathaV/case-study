import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

  getCount(event: any) {
    console.log(event);
    
    this.data = event;
  }

}
