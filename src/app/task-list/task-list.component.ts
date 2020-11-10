import {Component, OnInit, Input, Output} from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() list: Todo[];

  ngOnInit(): void {
  }

}
