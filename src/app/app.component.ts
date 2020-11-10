import { Component } from '@angular/core';
import { Todo } from './models/Todo';
import { TODOS } from './mock/todos'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // ngOnInit() {
  //   this.getUsers();
  // }

  title = 'TODO app';

  todos: Todo[] = TODOS;

  addTask(task: Todo): void {
    this.todos.push(task);
  }

  // async getUsers() {
  //   await fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => {
  //       this.todos = json
  //       console.log(this.todos)
  //     })
  // }
}
