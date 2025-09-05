import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Task{
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

  constructor(private http: HttpClient){
    
  }

  addTask(name: string){
    if(name){
      this.tasks.push({name});
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

}
