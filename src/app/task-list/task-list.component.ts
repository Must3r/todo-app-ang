import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor() { }

  @Input() list: Todo[];

  @Output() deleteTaskEvent = new EventEmitter<any>();

  deleteTask(task: any): void {
    this.deleteTaskEvent.emit(task);
  }
}
