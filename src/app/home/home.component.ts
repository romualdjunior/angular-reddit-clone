import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  id: number = null;

  constructor(private postService: PostService,private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params.id;
    if (this.id==null) {
      this.postService.getAllPosts().subscribe(post => {
        this.posts = post;
      });
    } else {
      console.log("ici")
      this.postService.getPostsBySubreddit(this.id).subscribe(post => {
        this.posts = post;
      });
    }

    
  }

  ngOnInit(): void {
  }

}
