import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  taskName: string = '';
  taskDescription: string = '';
  taskDate: string = '';
  taskTime: string = '';
  taskPriority: string = 'media'; // Valor predeterminado

  constructor(private taskService: TaskService) {}  // Inyección del servicio

  addTask(): void {
    if (this.taskName.trim() && this.taskDate) {
      this.taskService.addTask(this.taskName, this.taskDate, this.taskTime);
      this.taskName = '';
      this.taskDate = '';
      this.taskTime = '';
    }
  }

  private clearForm(): void {
    this.taskName = '';
    this.taskDescription = '';
    this.taskDate = '';
    this.taskTime = '';
    this.taskPriority = 'media';
  }
}
