import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Quote } from './../quote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  list = [];
  quote = new Quote();

  constructor(private _task: TaskService, ) { }
  ngOnInit() {
    this._task.retrieveAll( function(data) {
      this.list = data;
    }.bind(this));
  }

  doThis() {
    console.log(this.quote);
    this._task.create(this.quote);
    this.quote = new Quote();
    this._task.retrieveAll( function(data) {
      this.list = data;
    }.bind(this));
  }

}
