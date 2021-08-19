import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {User} from '../user';
import {ParsedProperty} from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  lists: User[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.register = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      // }, {validators: this.confirmPass.bind(this)});
    });
  }

  clear() {
    this.register = null;
  }

  submit() {
    let user = {
      email: this.register.value.email,
      password: this.register.value.password,
      confirmPassword: this.register.value.confirmPassword,
      country: this.register.value.country,
      age: this.register.value.age,
      gender: this.register.value.gender,
      phone: this.register.value.phone
    };
    this.lists.push(user);

  }

  // confirmPass() {
  //   const {value: password} = this.register.get('password');
  //   const {value: confirmPassword} = this.register.get('confirmPassword');
  //   return password === confirmPassword ? null : { notSame: true };
  // }

}
