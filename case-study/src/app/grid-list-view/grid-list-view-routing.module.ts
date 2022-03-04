import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListViewComponent } from './grid-list-view.component';

const routes: Routes = [
  {path: '', component: GridListViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridListViewRoutingModule { }
