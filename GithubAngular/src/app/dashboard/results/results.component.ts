import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  user1 = [];
  user2 = [];
  user1Score: Number = 0;
  user2Score: Number = 0;
  constructor(private _task: TaskService) { }

  ngOnInit() {
    this.user1 = this._task.user1;
    this.user1Score = this._task.user1Score;
    this.user2 = this._task.user2;
    this.user2Score = this._task.user2Score;
  }

}
