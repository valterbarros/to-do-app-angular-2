import {Component} from 'angular2/core';

@Component({
  selector: 'display',
  template: `<h1>{{ title }}</h1>
    <ul>
        <li *ngFor='#task of tasks'>
            {{ task }}
        </li>
    </ul>
    <input #task type='text' placeholder='nova tarefa' />
    <button (click)='addTask(task.value)'>Add</button>
    `
})
export class TaskComponent {
    title = 'Minhas Tasks'
    tasks = ['Comprar Comida', 'Levar o Cachorro para passear']

    addTask(newTask:string) {
      if (newTask.length > 0){
        this.tasks.push(newTask);
        document.getElementsByTagName('input')[0].value = ""; //Javascript puro
      }else{
        this.title = this.title + "( Você digitou uma task vazia!)";
      }
    }
}
