import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-card',
  imports: [TodoList],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

}
