import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css']
})
export class DynamicDivsComponent implements OnInit {

  listener: any;
  elements: any = [];
  scrollBottom: any;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.elements.push(i);
    }
    this.scrollBottom = window.scrollY;
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    console.log("Scroll Event", window.pageYOffset);
    if (window.pageYOffset > this.scrollBottom) {
      for (let i = 0; i < 5; i++) {
        this.elements.push(i);
      }
      this.scrollBottom = window.scrollY;
    }
  }

  getAlert(i: number) {
    if (i < 3) {
      switch (i) {
        case 0: alert('Button  in ' + (i + 1) + 'st div  clicked')
          break;
        case 1: alert('Button  in ' + (i + 1) + 'nd div  clicked')
          break;
        case 2: alert('Button  in ' + (i + 1) + 'rd div  clicked')
          break;
        default: ''

      }
    } else {
      alert('Button  in ' + (i + 1) + 'th div  clicked')
    }
  }

}
