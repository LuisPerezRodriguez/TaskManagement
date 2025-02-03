import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-pending-tasks',
  standalone: false,

  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.css',
})
export class PendingTasksComponent implements OnInit {
  pendingTasks: Task[] = [];
  public loading: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.taskService.getPendingTasks().subscribe((tasks) => {
      this.pendingTasks = tasks;
      this.loading = false;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/task', id]);
  }
}
