import { Component, inject, input } from '@angular/core';
import { DataStore } from '../../services/data-store';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-view',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskView {
  task = input<Task>();
  dataStore = inject(DataStore);
}
