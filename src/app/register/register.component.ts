import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/models/register.model';
import {PasswordValidation} from './password-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public localUser: User;
  form: FormGroup;

  message = '';
  constructor( private router: Router,  fb: FormBuilder) {
    this.form = fb.group({
      // define your control in you form
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone_no: ['', Validators.required]
    },{
      validator: PasswordValidation.MatchPassword // your validation method
    });
  }



  ngOnInit() {}

  onSubmit() {
    if (this.form.controls.email.invalid &&
      this.form.controls.password.invalid && this.form.controls.confirmPassword.invalid
      && this.form.controls.name.invalid && this.form.controls.name.invalid) {
      // this.router.navigate(['/']);
      this.message = 'All fields are required';
    } else {
      this.router.navigate(['/login']);

    }
  }

}
