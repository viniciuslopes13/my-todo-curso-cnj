import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {v4 as uuidv4} from 'uuid';

interface Task{
  id: string,
  name: string;
}

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {

  name: string = "Lista de Tarefas";

  tasks: Task[] = []

  @ViewChild("todoName") todoInputRef: ElementRef<HTMLInputElement> = null!;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.loadTasks();
  }

  addTask(name: string){
    if(name){
      this.tasks.push( {id: uuidv4(), name} );
      console.log(this.todoInputRef.nativeElement.value);
      this.todoInputRef.nativeElement.value = '';
    }
  }

  removeTask(task: Task){
    if(this.tasks.includes(task)){
      let index = this.tasks.indexOf(task)
      console.log(index)
      this.tasks.splice(index,1);
    }
  }

  showHello(){
    console.log("Clicou no botao")
  }

  loadTasks(){
    this.http.get<Task>('http://localhost:3000/tasks')
    .toPromise()
    .then((response) => {
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    })
  }

}
