import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../../post/store/post.actions';
import { Post } from '../../post/store/types/post.types';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPost!: FormGroup

  constructor(private store: Store<AppState>){}


  ngOnInit(): void {
    this.addPost = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      description: new FormControl(null , [Validators.required])
    })
  }


  onAddPost(){
    // const post: Post ={
    //   title : this.addPost.value.title,
    //   description: this.addPost.value.description
    // }

    this.store.dispatch(addPost({post: this.addPost.value}))
  }

  titleErrors(){
    const titleForm = this.addPost.get('title')
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
    const descriptionForm = this.addPost.get('description')
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
