import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { changeChennelName, customIncrement } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
  value!: number
  channelName$!: Observable<string>

  constructor(private store: Store<AppState>){}


  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}))
    this.value=0
  }

  onChangeChannelName(){
    this.store.dispatch(changeChennelName())
  }
}
