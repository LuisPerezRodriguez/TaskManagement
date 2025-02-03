import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  standalone: false,
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;
  user: any = null;
  public loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    //Get the task id
    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    //Get task data
    this.tasksService.getTaskById(taskId).subscribe(
      (taskData) => {
        this.task = taskData;
        //Get user data
        this.tasksService.getUserById(taskData.userId).subscribe(
          (userData) => {
            this.user = userData;
            this.loading = false;
          },
          (error) => {
            console.error('Error obtaining user data', error);
            this.loading = false;
          }
        );
      },
      (error) => {
        console.error('Error obtainibg task details', error);
        this.loading = false;
      }
    );
  }
}
