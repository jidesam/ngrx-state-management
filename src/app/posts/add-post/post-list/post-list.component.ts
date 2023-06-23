import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { getPosts } from '../../../post/store/post.selectors';
import { Post } from '../../../post/store/types/post.types';
import { deletePost } from '../../../post/store/post.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts!:Observable<Post[]>
  // post: string =''
  constructor(private store: Store<AppState>,
              private router: Router){}


  ngOnInit(): void {
   this.posts = this.store.select(getPosts)
   console.log(this.posts)
  }

  
  onDeletePost(id: any){
    if(confirm('are you sure you want to delete post?')){
      this.store.dispatch(deletePost({id}))
    }
  }

  onEditPost(data: any){
    this.router.navigate(['edit', {data}])
  }

  

}
