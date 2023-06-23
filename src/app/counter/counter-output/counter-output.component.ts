import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { getCounter, getName } from 'src/app/store/counter.selectors';
import { counterState } from 'src/app/store/types/counter.types';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy{

  count: number = 0;
  // count$!: Observable<{counter : number}>
  counterSubscription! : Subscription;
  name: string =''
  counter$! : Observable<number>

  constructor(private store: Store<AppState>){}


  ngOnInit(): void {
  //  this.counterSubscription = this.store.select('counter').subscribe(
  //     (res) =>{
  //       this.count = res.counter
  //     }
  //   )

  this.store.select(getCounter).subscribe((res) =>{
    this.count = res
  })

  this.store.select(getName).subscribe((res) =>{
    this.name = res
  })
  
  
  //   this.count$ = this.store.select('counter')
  //   console.log(this.count$)
   }

  ngOnDestroy(): void {
  //  if(this.counterSubscription){
  //   this.counterSubscription.unsubscribe()
  //  }
  }


}
