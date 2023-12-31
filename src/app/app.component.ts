import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { getLoader, getErrorMessage } from './shared/components/store/shared.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx';
  showLoading!: Observable<boolean>
  errorMessage!: Observable<string>

  constructor(private store : Store<AppState>){}
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoader)

    this.errorMessage = this.store.select(getErrorMessage)
  }
}
