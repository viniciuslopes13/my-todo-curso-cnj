import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { TodoPage } from './pages/todo-page/todo-page';
import { Home } from './pages/home/home';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, TodoPage, Home, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-todo');
}
