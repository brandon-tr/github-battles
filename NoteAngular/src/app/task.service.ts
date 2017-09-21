import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';

@Injectable()
export class TaskService {
  constructor(private _http: Http) { }
  retrieveAll(callback) {
    this._http.get('/allQuotes').subscribe(
      (data) => { callback(data.json()) },
      (err) => { console.log(err) }
    );
  }
  create(quote) {
    this._http.post('/quotes/new', quote)
    .map( data => data.json())
    .toPromise();
  }
}
