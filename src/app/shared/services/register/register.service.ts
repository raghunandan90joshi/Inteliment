import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class RegisterService {

  constructor(private http: Http, private storage: LocalStorageService) { }

}
