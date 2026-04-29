import { Routes } from '@angular/router';
import { Planner } from './components/planner/planner';
import { Parent } from './components/recursive-test/parent/parent';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/planner',
        pathMatch: 'full'
    },
    {
        path: 'planner',
        component: Planner
    },
    {
        path: 'recursive-test',
        component: Parent
    }
];
