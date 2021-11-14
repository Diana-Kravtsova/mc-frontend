import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from "../interfaces/about.interface";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUri = 'http://localhost:8080/info';
  constructor(private http: HttpClient) {}

  getAbout(){
    return this.http.get<About>(`${this.apiUri}/about`)
  }
}
