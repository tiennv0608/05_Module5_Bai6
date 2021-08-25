import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo} from '../../model/todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup = new FormGroup({
    content: new FormControl()
  });
  message: string;


  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  submit() {
    const todo = this.todoForm.value;
    console.log(todo);
    this.todoService.create(todo).subscribe(() => {
      this.todoForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

}
