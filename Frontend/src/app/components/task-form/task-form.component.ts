import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService, Task } from '../../services/task.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  imports : [FormsModule]
})
export class TaskFormComponent {
  newTask: Task = { title: '', description: '' };

  // 👇 Event to notify parent when task is added
  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.title.trim()) {
      this.taskService.addTask(this.newTask).subscribe(() => {
        this.newTask = { title: '', description: '' }; // ✅ reset form
        this.taskAdded.emit(); // 👈 notify parent to reload task list
      });
    }
  }
}
