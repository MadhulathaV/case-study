import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {

  @Input() timeLog: any;

  constructor() { }

  ngOnInit(): void {
  }

}
