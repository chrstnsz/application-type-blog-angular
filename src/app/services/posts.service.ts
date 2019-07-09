import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

	posts: Post[] = [];
  	
	postsSubject = new Subject<Post[]>();

	constructor() {
		this.getPosts();
	}

	savePosts(){
		firebase.database().ref('/posts').set(this.posts);
	}
	emitPosts(){
		this.postsSubject.next(this.posts);
	}

	getPosts(){
		firebase.database().ref('/posts')
			.on('value', (data) => {
				this.posts = data.val() ? data.val() : [];
				this.emitPosts();
			})
	}
	addPost(newPost: Post){
		newPost.loveIts = 0;
		newPost.created_at = new Date().getTime();
		this.posts.push(newPost);
		this.savePosts();
		this.emitPosts();
	}

	addLoveIts(index: number) {
        this.posts[index].loveIts++;
        this.savePosts();
        this.emitPosts();
    }

    removeLoveIts(index: number) {
        this.posts[index].loveIts--;
        this.savePosts();
        this.emitPosts();
    }

    deletePost(post: Post){
    	const postIndexToRemove = this.posts.findIndex(
    		(bookEl) => {
    			if(bookEl === post) {
    				return true;
    			}
    		}
    	);
    	this.posts.splice(postIndexToRemove, 1);
    	this.savePosts();
    	this.emitPosts();
    }

}
