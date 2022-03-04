import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css']
})
export class ComponentDComponent implements OnInit {

  startCount = 0;
  pauseCount = 0;

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.startCount.subscribe(val => {
      this.startCount = val;
    })
    this.service.pauseCount.subscribe(val => {
      this.pauseCount = val;
    })
  }

}
