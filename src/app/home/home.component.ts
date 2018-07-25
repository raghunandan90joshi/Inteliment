import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../register/password-validation';
import { UsersService } from '../shared/services/users/users.service';
import {finalize} from 'rxjs/operators';
import { SearchUsers} from '../shared/models/search_results';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  all_users: any;
  password: '';
  confirmPassword: '';
  search_results: SearchUsers[];
  searchTerm = new Subject<string>();
  user_id: any;
  total_count: any;
  constructor(private storage: LocalStorageService, private router: Router, fb: FormBuilder,
              private user_service: UsersService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAllUsers();
/*
    Search function
*/
    this.user_service.search(this.searchTerm).subscribe(results => {
      this.search_results = this.user_service.search_results;
      this.total_count = this.user_service.total_count;
      console.log(this.total_count);
    });
  }

/*
  Getting all Users from user_service
*/
  getAllUsers() {
    this.user_service.getAllUsers()
      .pipe(finalize(() => {
        // this.isLoading = false;
      }))
      .subscribe((quote: any) => {
        console.log(quote);
        this.all_users = quote;
        // this.total_count   = quote.total_count;
        // console.log(this.total_count);
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }, (error: any) => {
        this.isLoading = false;
      });
  }

/*
  Getting user_url onSelect user
*/
  onUserclick(users: any) {
    this.route.data.subscribe(
      (data) => {
        this.user_id = data;

        this.storage.store('user_url', users.url);
        console.log(this.user_id);
      });

  }
}
