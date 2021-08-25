import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  message: string;
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
      this.message = 'Bạn có muốn xóa thẻ ' + todo.content + ' không?';
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() => {
      console.log('Xóa thành công');
      this.router.navigate(['todos']).then(() => {
        window.location.reload();
      });
    });
  }

  abort() {
    this.router.navigate(['todos']).then(() => {
      window.location.reload();
    });
  }

}
