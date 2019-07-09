import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostsService } from '../app/services/posts.service';


  const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'posts/new', component: NewPostComponent},
    { path: 'posts/view/:id', component: PostListItemComponent},
    { path: '', redirectTo: 'posts', pathMatch: 'full'},
    { path: '**', redirectTo: 'posts'}
  ]
   
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
