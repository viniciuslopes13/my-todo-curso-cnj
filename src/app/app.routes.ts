import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TodoPage } from './pages/todo-page/todo-page';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'todo', component: TodoPage}
];
