import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css']
})
export class TodoContentComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {
  }

  ngOnInit() {
  }

}
