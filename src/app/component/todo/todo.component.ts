import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Todo} from '../../model/todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

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
  todoFormEdit: FormGroup = new FormGroup({
    contentEdit: new FormControl(),
    complete: new FormControl()
  });
  message: string;
  check: number;


  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  findById(id: number, i: number) {
    this.check = i;
    return this.todoService.findById(id).subscribe(todo => {
      this.todoFormEdit = new FormGroup({
        contentEdit: new FormControl(todo.content),
        completeEdit: new FormControl(false)
      });
    });
  }

  edit(id: number) {
    const todo = {
      id: id,
      content: this.todoFormEdit.value.contentEdit,
      complete: this.todoFormEdit.value.completeEdit,
    }
    console.log(todo);
    console.log(id);
    this.todoService.update(id, todo).subscribe(() => {
      console.log('Cập nhật thành công');
      this.todoFormEdit.reset();
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

}
