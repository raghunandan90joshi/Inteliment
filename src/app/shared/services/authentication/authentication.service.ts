import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorage } from 'ngx-webstorage';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';
// import { throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';



export interface Credentials {
  email: string;
  token: string;
}

export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}
const credentialsKey = 'credentials';

const routes = {
  PostLogin: (c: LoginContext) => `https://verdictprofessional-181309.appspot.com/login`
};

@Injectable()
export class AuthenticationService {
  isLoggedin: boolean;
  private _credentials: Credentials | null;

  path: any;
  constructor(private http: Http, private httpClient: HttpClient) {}

/*
  Function for Login Api
*/
  login_page(context: LoginContext): Observable<any> {
    return this.httpClient
      .put(routes.PostLogin(context), context)
      .pipe(
        map((body: any) => body));
  }

/*
  Function to store data in local storage
*/
  public setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

}
