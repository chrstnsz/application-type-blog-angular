import { Component, Input, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import { Post } from '../models/Post.model';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})



export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
  }

  onLoveIt(index: number) {
  	this.postsService.addLoveIts(index);
  }

  onDislike(index: number) {
    this.postsService.removeLoveIts(index);
  }

  onDelete(post: Post) {
    this.postsService.deletePost(post);
  }

}
