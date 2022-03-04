import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css']
})
export class FloatingBannerComponent implements OnInit {
  
  count = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
