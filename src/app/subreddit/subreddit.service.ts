import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubredditModel } from './subreddit-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>('http://34.125.77.251:8080/api/subreddit');
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>('http://34.125.77.251:8080/api/subreddit',
      subredditModel);
  }
}
