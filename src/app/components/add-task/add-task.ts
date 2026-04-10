import { Component, inject, signal } from '@angular/core';
import { Task } from '../../../models/task.model';
import { form, FormField } from '@angular/forms/signals';
import { DataStore } from '../../services/data-store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-add-task',
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
  ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  dataStore = inject(DataStore);
  panelOpenState = signal(true);

  commonTimes = [15, 30, 45, 60, 90];
  dateOptions = [
    { label: 'Today', daysOffset: 0, hours: 9 },
    { label: 'Tomorrow', daysOffset: 1, hours: 9 },
    { label: '2 Days', daysOffset: 2, hours: 9 },
    { label: '3 Days', daysOffset: 3, hours: 9 },
    { label: '1 Week', daysOffset: 7, hours: 9 },
  ];

  taskModel = signal<Task>({
    id: '',
    name: '',
    estimatedCompletionTime: '',
    finished: false,
    startDaytime: '',
  });

  taskForm = form(this.taskModel);

  setEstimatedTime(minutes: number): void {
    this.taskModel.update((task) => ({
      ...task,
      estimatedCompletionTime: minutes.toString(),
    }));
  }

  setStartDate(daysOffset: number, hours: number): void {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    date.setHours(hours, 0, 0, 0);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const dateString = `${year}-${month}-${day}T${hour}:${minute}`;

    this.taskModel.update((task) => ({
      ...task,
      startDaytime: dateString,
    }));
  }

  isDateSelected(dateOption: { label: string; daysOffset: number; hours: number }): boolean {
    const currentDate = this.taskForm.startDaytime().value();
    if (!currentDate) return false;

    const date = new Date();
    date.setDate(date.getDate() + dateOption.daysOffset);
    date.setHours(dateOption.hours, 0, 0, 0);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const expectedDateString = `${year}-${month}-${day}T${hour}:${minute}`;
    return currentDate.substring(0, 16) === expectedDateString;
  }

  addTask() {
    this.dataStore.addTask(this.taskModel());
  }

  clearTasks() {
    this.dataStore.clearTasks();
  }
}
