import { Component } from '@angular/core';
import { ToDoServiceService } from './to-do-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: string;
  tasks: any;

  constructor(private todoService: ToDoServiceService) {
    this.task = '';
    this.tasks = [];
    this.getTask();
  }

  getTask() {
    this.todoService.getTasks().subscribe(response => this.tasks = response);
  }
  setTask() {

  }
}
