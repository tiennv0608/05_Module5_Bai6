import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoRoutingModule} from './module/todo/todo-routing.module';
import {TodoModule} from './module/todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
