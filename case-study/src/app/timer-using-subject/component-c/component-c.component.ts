import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {

  timeLog: any;

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.timeTrack.subscribe(val => {
      this.timeLog = val;
    })
  }

}
