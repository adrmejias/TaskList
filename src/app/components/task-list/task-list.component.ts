import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];  // Declara que `tasks` es un array de `Task`

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  // Obtiene las tareas del servicio
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.saveTasks();  // Guarda los cambios
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }
  
}
