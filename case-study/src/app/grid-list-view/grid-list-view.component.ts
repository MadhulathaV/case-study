import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.css']
})
export class GridListViewComponent implements OnInit {

  prices = [100, 200, 300, 400, 500];
  priceFilter: any;
  products: number[] = [];
  gridView = true;

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 40; i++) {
      this.products.push(i);
    }
  }

  changeView(view: any) {
    view == 'grid' ? this.gridView = true : this.gridView = false;
  }

}
