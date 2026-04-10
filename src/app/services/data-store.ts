import { Injectable, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  private readonly tasksStorageKey = 'day-planner.tasks';
  tasks = signal<Task[]>(this.loadTasks());

  private loadTasks(): Task[] {
    const stored = localStorage.getItem(this.tasksStorageKey);
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored) as Task[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  getTasks(): Task[] {
    return this.tasks();
  }

  setTasks(tasks: Task[]): void {
    this.tasks.set(tasks);
    localStorage.setItem(this.tasksStorageKey, JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setTasks(tasks);
  }

  clearTasks(): void {
    this.tasks.set([]);
    localStorage.removeItem(this.tasksStorageKey);
  }
}
