import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-completed-tasks',
  standalone: false,

  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css',
})
export class CompletedTasksComponent implements OnInit {
  completedTasks: Task[] = [];
  public loading: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.taskService.getCompletedTasks().subscribe((tasks) => {
      this.completedTasks = tasks;
      this.loading = false;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/task', id]);
  }
}
