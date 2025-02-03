import { NgModule } from '@angular/core';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompletedTasksComponent,
    PendingTasksComponent,
    TaskDetailsComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class TasksModule {}
