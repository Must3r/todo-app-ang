import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  @Output() addTaskEvent = new EventEmitter<any>();

  taskText = '';

  addTask(task: any): void {
    this.addTaskEvent.emit(task);
    this.taskText = '';
  }

  ngOnInit(): void {
  }

}
