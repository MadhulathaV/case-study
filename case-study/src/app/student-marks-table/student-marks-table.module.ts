import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMarksTableRoutingModule } from './student-marks-table-routing.module';
import { StudentMarksTableComponent } from './student-marks-table.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    StudentMarksTableComponent
  ],
  imports: [
    CommonModule,
    StudentMarksTableRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ]
})
export class StudentMarksTableModule { }
