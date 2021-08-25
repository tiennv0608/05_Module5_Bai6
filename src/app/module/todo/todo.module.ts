import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoComponent} from '../../component/todo/todo.component';
import {TodoEditComponent} from '../../component/todo-edit/todo-edit.component';
import {TodoDeleteComponent} from '../../component/todo-delete/todo-delete.component';
import {TodoContentComponent} from '../../component/todo-content/todo-content.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [TodoComponent, TodoEditComponent, TodoDeleteComponent, TodoContentComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
