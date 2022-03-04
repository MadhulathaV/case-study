import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GridListViewRoutingModule } from './grid-list-view-routing.module';
import { GridListViewComponent } from './grid-list-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    GridListViewComponent
  ],
  imports: [
    CommonModule,
    GridListViewRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class GridListViewModule { }
