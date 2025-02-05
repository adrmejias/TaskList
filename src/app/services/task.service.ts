import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { time } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() { 
    this.loadTasks();
  }

  addTask(title: string, date: string, time: string): void {
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      date: date,      // Guardamos la fecha
      time: time,
      completed: false
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }
  

  public saveTasks(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  private loadTasks(): void {
    if (typeof localStorage !== 'undefined') {
      const storedTasks = localStorage.getItem('tasks');
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    } else {
      this.tasks = [];  // En caso de que no haya localStorage disponible
    }
  }
  
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }
  
  getTasks(): Task[] {
    return this.tasks;
  }
  
}
