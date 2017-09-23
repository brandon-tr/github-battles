import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { dynamicSort } from './sort';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  list = [];

  constructor(private _task: TaskService) { }

  ngOnInit() {
    this._task.retrieveUsers(function(data){
      this.list = data;
      this.list.sort(dynamicSort('-score'));
    }.bind(this));
  }

}
