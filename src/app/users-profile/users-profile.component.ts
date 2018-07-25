import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {finalize} from 'rxjs/operators';
import { UsersService } from '../shared/services/users/users.service';
import {SearchUsers} from '../shared/models/search_results';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  search_results: SearchUsers[];
  searchTerm = new Subject<string>();
  user: any;
  total_count: any;
  user_repo: any;
  user_followers: any;

  constructor(private http: Http, private userservice: UsersService,
              private route: ActivatedRoute, private storage: LocalStorageService) {

    // this.runQuery();
  }


  ngOnInit() {
    this.getUrlUser();
    this.userservice.search(this.searchTerm).subscribe(results => {
      this.search_results = this.userservice.search_results;
      this.total_count = this.userservice.total_count;
      console.log(this.total_count);
    });
  }

  onUserclick(users: any) {
    // this.userservice.getrate();
    this.route.data.subscribe(
      (data) => {

        this.storage.store('user_url', users.url);
      });
      this.getUrlUser();
  }

  /*
  Getting selected User's data from user_service
*/
  getUrlUser() {
    this.userservice.getUrlUser()
      .pipe(finalize(() => {
        // this.isLoading = false;
      }))
      .subscribe((quote: any) => {
        this.user = quote;
        console.log(this.user);
        // console.log(this.total_count);
        this.getUserRepo();
        this.getUserFollowers();
        setTimeout(() => {
        }, 500);
      }, (error: any) => {
      });
  }

  /*
  Getting repository_url onSelect user
*/
  getUserRepo() {
    this.userservice.getUserRepo()
      .pipe(finalize(() => {
        // this.isLoading = false;
      }))
      .subscribe((quote: any) => {
        console.log(quote);
        this.user_repo = quote;
        // console.log(this.total_count);
        setTimeout(() => {
        }, 500);
      }, (error: any) => {
      });
  }

  /*
Getting followers_url onSelect user
*/
  getUserFollowers() {
    this.userservice.getUserFollowers()
      .pipe(finalize(() => {
        // this.isLoading = false;
      }))
      .subscribe((quote: any) => {
        console.log(quote);
        this.user_followers = quote;
        console.log(this.user_followers);
        setTimeout(() => {
        }, 500);
      }, (error: any) => {
      });
  }

}



