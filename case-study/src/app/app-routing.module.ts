import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListViewComponent } from './grid-list-view/grid-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'floating-banner', pathMatch: 'full' },
  { path: 'floating-banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) },
  { path: 'grid-list-view', loadChildren: () => import('./grid-list-view/grid-list-view.module').then(m => m.GridListViewModule)},
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)},
  { path: 'timer-using-subject', loadChildren: () => import('./timer-using-subject/timer-using-subject.module').then(m => m.TimerUsingSubjectModule)},
  { path: 'student-marks-table', loadChildren: () => import('./student-marks-table/student-marks-table.module').then(m => m.StudentMarksTableModule)},
  { path: 'dynamic-divs', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)},
  { path: '**', redirectTo: 'floating-banner' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
