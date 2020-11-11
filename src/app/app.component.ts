import { Component } from '@angular/core';
import { Todo } from './models/Todo';
import { TODOS } from './mock/todos'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TODO app';

  todos: Todo[] = TODOS;

  count = 1;

  addTask(task: Todo): void {
    this.todos.push(task);
  }

  deleteTask(task: number): void {
    this.todos.splice(task, this.count);
  }
}
