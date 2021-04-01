import { Component } from '@angular/core';

interface Task {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  public newTaskName = ""; //guarda o nome inserido no input

  public tasks: Task[] = [ //lista de tarefas
  ]

  public addTask() { //função de adiciona uma tarefa, e o "status" inicia como "não feita", ou sej,a done: false
    const newTask = {
      name: this.newTaskName, //pega o nome guardado em newTaskName
      done: false,
    }
    this.tasks.push(newTask); //da um push da lista, acrescentando a nova tarefa
    this.newTaskName = ""; //a variável newTaskName volta a ser vazia
  }

}