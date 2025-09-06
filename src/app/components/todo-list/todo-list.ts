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
      this.http.post('http://localhost:3000/tasks', {id: uuidv4(), name})
      .toPromise()
      .then( response => {
        console.log(response)
        this.loadTasks()
      })
      .catch( error => {
        console.log(error)
      })
      this.todoInputRef.nativeElement.value = '';
    }
  }

  removeTask(task: Task){
    this.http.delete(`http://localhost:3000/tasks/${task.id}`)
    .toPromise()
    .then(response => {
      console.log(response)
      this.loadTasks()
    })
    .catch( error => {
      console.log(error)
    });
  }

  showHello(){
    console.log("Clicou no botao")
  }

  loadTasks(){
    this.http.get<Task[]>('http://localhost:3000/tasks')
    .toPromise()
    .then((response) => {
      this.tasks = response!;
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    })
  }

}
