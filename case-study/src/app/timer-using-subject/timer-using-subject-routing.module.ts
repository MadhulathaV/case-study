import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerUsingSubjectComponent } from './timer-using-subject.component';

const routes: Routes = [
  { path: '', component: TimerUsingSubjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerUsingSubjectRoutingModule { }
