import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
// import { Task } from './tasks.model';
import { TaskService,Task } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TaskFormComponent, TaskListComponent],  // 👈 Import your components
  styleUrls: []
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
