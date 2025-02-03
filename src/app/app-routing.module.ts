import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingTasksComponent } from './tasks/components/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './tasks/components/completed-tasks/completed-tasks.component';
import { TaskDetailsComponent } from './tasks/components/task-details/task-details.component';
import { Error404Component } from './shared/pages/error-404/error-404.component';
import { AboutUsComponent } from './shared/pages/about-us/about-us.component';
import { HomeComponent } from './home/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pending',
    component: PendingTasksComponent,
  },
  {
    path: 'completed',
    component: CompletedTasksComponent,
  },
  {
    path: 'task/:id',
    component: TaskDetailsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
