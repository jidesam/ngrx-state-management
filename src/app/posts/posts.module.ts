import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './add-post/post-list/post-list.component';
import { EditPostComponent } from './add-post/edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { StoreModule } from '@ngrx/store';
import { _postReducer } from '../post/store/post.reducers';
import { POST_STATE_NAME } from '../post/store/post.selectors';


@NgModule({
  declarations: [
    PostListComponent,
    EditPostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME, _postReducer)
    
  ]
})
export class PostsModule { }
