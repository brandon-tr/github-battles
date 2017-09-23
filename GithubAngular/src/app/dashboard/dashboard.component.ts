import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user1 = new User();
  user1List = [];
  user2 = new User();
  user2List = [];

  constructor(private _task: TaskService) { }

  ngOnInit() {
  }

  User1Submit() {
    this._task.retrieveGit(this.user1, function(data){
      this.user1List = data;
      this._task.user1 = data;
      this._task.user1Score = data.public_repos + data.followers * 12;
      this.user1.picture = data.avatar_url;
      this.user1.score = this._task.user1Score;
    }.bind(this));
  }
  User2Submit() {
    this._task.retrieveGit(this.user2, function(data){
      this.user2List = data;
      this._task.user2 = data;
      this._task.user2Score = data.public_repos + data.followers * 12;
      this.user2.picture = data.avatar_url;
      this.user2.score = this._task.user2Score;
    }.bind(this));
  }
  Battle() {
    this._task.create1(this.user1);
    this._task.create2(this.user2);
    this.user1 = new User();
    this.user2 = new User();
    this._task.Battle();
  }
}
