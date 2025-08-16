import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [CommonModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }


  toggleCompleted(task: Task) {
    this.taskService.updateTask(task._id!, { completed: !task.completed }).subscribe(() => {
      this.loadTasks(); // refresh after update
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task._id!).subscribe(() => {
      this.loadTasks(); // refresh after delete
    });
  }

}
