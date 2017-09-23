import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TaskService {
  user1 = [];
  user1Score: Number = 0;
  user2 = [];
  user2Score: Number = 0;
  constructor(private _http: Http, private _route: Router) { }

  retrieveGit(user, callback) {
    this._http.get(`https://api.github.com/users/${user.name}`).subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error'); }
    );
  }
  retrieveUsers(callback) {
    this._http.get(`/getUsers`).subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error'); }
    );
  }
  create1(user1) {
    console.log('here');
    this._http.post('/addPlayer1', user1).map(data => data.json()).toPromise();
  }
  create2(user2) {
    console.log(user2);
    this._http.post('/addPlayer2', user2).map(data => data.json()).toPromise();
  }
  Battle() {
    this._route.navigateByUrl('results');
  }
}
