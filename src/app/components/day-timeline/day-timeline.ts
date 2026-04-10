import { Component, inject } from '@angular/core';
import { DataStore } from '../../services/data-store';

@Component({
  selector: 'app-day-timeline',
  imports: [],
  templateUrl: './day-timeline.html',
  styleUrl: './day-timeline.scss',
})
export class DayTimeline {
  dataStore = inject(DataStore);
}
