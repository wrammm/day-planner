import { Component, inject, signal } from '@angular/core';
import { Task } from '../../../models/task.model';
import { form, FormField } from '@angular/forms/signals';
import { DataStore } from '../../services/data-store';

@Component({
  selector: 'app-add-task',
  imports: [FormField],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {

  dataStore = inject(DataStore);

  taskModel = signal<Task>({
    name: '',
    estimatedCompletionTime: '',
    finished: false,
    startDaytime: '',
  });

  taskForm = form(this.taskModel);

  addTask() {
    this.dataStore.addTask(this.taskModel());
  }

  clearTasks() {
    this.dataStore.clearTasks();
  }
  
}
