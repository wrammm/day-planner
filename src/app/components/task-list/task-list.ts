import { Component, input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskView } from '../task/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskView],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasks = input<Task[]>();
}
