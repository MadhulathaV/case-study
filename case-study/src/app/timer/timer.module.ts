import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimerComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimerModule { }
