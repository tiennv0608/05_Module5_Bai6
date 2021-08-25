import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    content: new FormControl()
  });
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    }, error => {
      console.log(error);
    });
  }

  findById(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm = new FormGroup({
        content: new FormControl(todo.content)
      });
    });
  }

  edit(id: number) {
    const todo = this.todoForm.value;
    this.todoService.update(id, todo).subscribe(() => {
      console.log('Cập nhật thành công');
      this.todoForm.reset();
      this.router.navigate(['/todos']).then(() => {
        window.location.reload();
      });
    }, error => {
      console.log(error);
    });
  }

}
