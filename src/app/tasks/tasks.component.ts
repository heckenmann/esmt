import { Component, OnInit } from '@angular/core';
import { SuperComponent } from '../super.component';
import { HttpService, HttpPaths } from '../http.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [
    HttpService
  ]
})
export class TasksComponent extends SuperComponent implements OnInit {

  tasks;

  constructor(
    private _httpService: HttpService
  ) {
    super();
  }

  ngOnInit() {
    this._httpService.getESResource(HttpPaths.TASKS).subscribe(tasks => { this.tasks = tasks.tasks; });
  }

  refresh() {
    this.ngOnInit();
  }
}
