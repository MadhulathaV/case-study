import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  count: any;

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.timeLeft.subscribe(val => {
      this.count = val;
    })
  }

}
