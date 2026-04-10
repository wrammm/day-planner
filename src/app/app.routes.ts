import { Routes } from '@angular/router';
import { Planner } from './components/planner/planner';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/planner',
        pathMatch: 'full'
    },
    {
        path: 'planner',
        component: Planner
    }
];
