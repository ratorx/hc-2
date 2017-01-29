import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Tweet } from './tweet';

@Injectable()
export class PlayService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getTweets() : Observable<Tweet[]> {
    console.log(this.http.get('http://ree.to:3001').map(res => res.json()));
    return this.http.get('http://ree.to:3001').map(res => res.json());
  }
}
