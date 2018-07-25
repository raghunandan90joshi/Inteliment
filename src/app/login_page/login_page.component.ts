import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login_page.component.html',
  styleUrls: ['./login_page.component.css']
})
export class LoginpageComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  message: any;
  options: FormGroup;


  access_token: any;
  constructor(private storage: LocalStorageService, private router: Router,
              private token_service: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

/*
  function for login
*/
  login_page() {
    this.isLoading = true;
    this.token_service.login_page({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    })
      .pipe(finalize(() => {
        this.loginForm.markAsPristine();
        this.isLoading = false;
      }))
      .subscribe(response => {
        console.log( response);

        const credentials = {
          email: this.loginForm.value.email,
          token: response['Access-token']
        };


        // Save access token to session storage
        this.token_service.setCredentials(credentials, this.loginForm.value.remember);
        this.router.navigate(['/home']);

      }, error => {

      });
  }

/*
  function for validate credentials
*/
  onLoginValidation() {
    if (this.loginForm.controls.email.invalid &&
      this.loginForm.controls.password.invalid) {
      // this.router.navigate(['/']);
      this.message = 'All fields are required';
    } else {
      this.login_page();

    }
  }


  ngOnInit() {}

}
