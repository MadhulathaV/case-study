import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerUsingSubjectRoutingModule } from './timer-using-subject-routing.module';
import { TimerUsingSubjectComponent } from './timer-using-subject.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimerUsingSubjectComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent
  ],
  imports: [
    CommonModule,
    TimerUsingSubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimerUsingSubjectModule { }
