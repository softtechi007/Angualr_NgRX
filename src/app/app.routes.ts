import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { Counter } from './counter/counter';

export const routes: Routes = [
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: '', component: Home},
    {path: 'courses', component: Courses},
    {path: 'counter', component: Counter}
];
