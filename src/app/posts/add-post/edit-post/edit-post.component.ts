import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getPostById } from '../../../post/store/post.selectors';
import { Post } from '../../../post/store/types/post.types';
import { Subscription } from 'rxjs';
import { updatePost } from '../../../post/store/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post
  postSubscription!: Subscription

  editPost!: FormGroup
  constructor(private route: ActivatedRoute,
              private store: Store<AppState>,
              private router : Router){}


  ngOnInit(): void {
    this.initEditPostForm()

    this.route.paramMap.subscribe(params=>{
      const id = params.get('id')
      this.postSubscription =  this.store.select(getPostById, {id}).subscribe((data) =>{
        this.post = data
        this.editPost.patchValue({
          title: this.post.title,
          description : this.post.description
        })

      })
    })
  }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe()
    }
  }

  initEditPostForm(){
    this.editPost = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description : new FormControl('', [ Validators.required, Validators.minLength(10)])
    })
  }

  onEditPost(){
    if(!this.editPost.valid){
      return
    }

    const title = this.editPost.value.title
    const description = this.editPost.value.description

    const post: Post = {
      id: this.post.id,
      title,
      description
    }

    // dispatch your action

    this.store.dispatch(updatePost({post}))
    this.router.navigateByUrl('/posts')

  }


  
  titleErrors(){
    const titleForm = this.editPost.get('title')
    if(titleForm?.touched && !titleForm.valid){
      if(titleForm?.errors?.['required']){
        return 'title is required'
      };
      if(titleForm?.errors?.['minlength']){
        return 'title should not be less than 8 characters'
      }
    }
    return ''
  }

  descriptionErrors(){
    const descriptionForm = this.editPost.get('description')
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm?.errors?.['required']){
        return 'description is required'
      };
      if(descriptionForm?.errors?.['minlength']){
        return 'description should not be less than 8 characters'
      }
    }
    return ''
  }

}
