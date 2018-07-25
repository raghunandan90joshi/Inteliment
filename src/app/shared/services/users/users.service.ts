import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import {SearchUsers} from '../../models/search_results';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {LocalStorageService} from 'ngx-webstorage';


const routes = {
  PreAllAdvertiser: () => `https://api.github.com/users`,
  GetUser: () => this.storage.retrieve('user_url')

};

export interface PreQualifyAdvertiserContext {
  type: string;
  request_id: string;
  request_email: string;
}


export interface PreQualifyAdvertiserContext {
  type: string;
  request_id: string;
  request_email: string;
}

@Injectable()
export class UsersService {
  search_results: SearchUsers[];
  queryUrl: string = '?q=';
  constructor(private httpClient: HttpClient, private http: Http, private storage: LocalStorageService) { }
  total_count: any;
  repo: any;
  followers: any;

  getAllUsers(): Observable<any> {
    return this.httpClient
      .get(routes.PreAllAdvertiser())
      .pipe(
        map((body: any) => body),
      );
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(100).distinctUntilChanged().switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {

    console.log(this.queryUrl + term);
    return this.http.get(`https://api.github.com/search/users?q=` + term)
      .map((res) => {
        res.json();
        this.search_results = res.json()['items'];
        this.total_count = res.json()['total_count'];
        // this.search_results.splice(0,1);
        console.log(res.json());
        // console.log(this.total_count);

        return res.json();

      });
  }

  // getUrlUser(): Observable<any> {
  //   return this.httpClient.get(routes.GetUser()).pipe(
  //       map((body: any) => body),
  //     );
  // }

  getUrlUser(): Observable<Event[]> {

    return this.http.get(this.storage.retrieve('user_url'))
      .map((result) => {

        this.repo =  result.json()['repos_url'];
        this.followers =  result.json()['followers_url'];
        console.log(this.followers);
        return result.json();

      });
  }
  getUserRepo(): Observable<Event[]> {
    const headers = new Headers();

    return this.http.get(this.repo, { headers: headers })
      .map((result) => {

        result.json();
        // console.log(result.json());
        return result.json();

      });

  }

  getUserFollowers(): Observable<Event[]> {
    const headers = new Headers();

    return this.http.get(this.followers, { headers: headers })
      .map((result) => {

        result.json();
        // console.log(result.json());
        return result.json();

      });

  }
}
