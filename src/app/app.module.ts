import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { _counterReducer } from './store/counter.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { appReducer } from './state/app.state';
import {HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
       maxAge: 25, logOnly: !isDevMode()
       })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
