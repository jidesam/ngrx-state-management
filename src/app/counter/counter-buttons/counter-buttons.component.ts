import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { decrement, increment, reset } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {

  constructor(private store: Store<AppState>){}


  count: number =0

  onIncrease(){
    this.store.dispatch(increment({value: 5}))
  }
  onDecrease(){
    this.store.dispatch(decrement({value: 2}))
  }
  onReset(){
    this.store.dispatch(reset())
  }

}
