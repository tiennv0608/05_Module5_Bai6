import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  lists: User[] = [];

  constructor() {
  }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }

  signIn() {
    let data = {
      email: this.login.value.email,
      password: this.login.value.password,
    };
    this.lists.push(data);
  }

  clear() {
    this.login = null;
  }
}
