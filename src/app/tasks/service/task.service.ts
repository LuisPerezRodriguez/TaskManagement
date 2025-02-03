import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getPendingTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => tasks.filter((task) => !task.completed)));
  }
  getCompletedTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => tasks.filter((task) => task.completed)));
  }
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
