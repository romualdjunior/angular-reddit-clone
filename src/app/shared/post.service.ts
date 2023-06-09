import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('/spring-api/api/posts');
  }

  
  getPostsBySubreddit(subreddit:number): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('/spring-api/api/posts/postBySubreddit/'+subreddit);
  }


  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('/spring-api/api/posts/add', postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('/spring-api/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('/spring-api/api/posts/by-user/' + name);
  }
}
