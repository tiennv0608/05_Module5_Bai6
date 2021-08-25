import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from '../../component/todo/todo.component';
import {TodoEditComponent} from '../../component/todo-edit/todo-edit.component';
import {TodoDeleteComponent} from '../../component/todo-delete/todo-delete.component';


const routes: Routes = [{
  path: '',
  component: TodoComponent
}, {
  path: 'edit/:id',
  component: TodoEditComponent
}, {
  path: 'delete/:id',
  component: TodoDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
