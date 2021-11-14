import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from "./user.interface";
import {Value} from "./contacts.interface";

@Injectable()
export class HttpService {
  apiUri = 'http://localhost:8080/info';

  constructor(private http: HttpClient) {}

  getCopyright(){
    return this.http.get<Value>(`${this.apiUri}/copyright`)
  }

  getUsers(){
    return this.http.get<User>(`${this.apiUri}/users`)
  }
}
