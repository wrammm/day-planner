import { Component, inject, input } from '@angular/core';
import { DataStore } from '../../services/data-store';
import { Task } from '../../../models/task.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-view',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    DatePipe,
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskView {
  task = input<Task>();
  dataStore = inject(DataStore);

  removeTask(): void {
    const taskId = this.task()?.id;
    if (taskId) {
      this.dataStore.removeTask(taskId);
    }
  }
}
