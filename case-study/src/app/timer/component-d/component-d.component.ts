import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css']
})
export class ComponentDComponent implements OnInit {

  @Input() startCount = 0;
  @Input() pauseCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
