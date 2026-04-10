import { Component, inject, signal } from '@angular/core';
import { AddTask } from '../add-task/add-task';
import { TaskList } from '../task-list/task-list';
import { Task } from '../../../models/task.model';
import { DataStore } from '../../services/data-store';

@Component({
  selector: 'app-planner',
  imports: [AddTask, TaskList],
  templateUrl: './planner.html',
  styleUrl: './planner.scss',
})
export class Planner {

  //get tasks from data store and pass to task list
  dataStore = inject(DataStore);
  tasks = this.dataStore.tasks;
  
}
