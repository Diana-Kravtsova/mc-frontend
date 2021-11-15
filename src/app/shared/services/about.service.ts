import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { InfoInterface } from "../interfaces/info.interface";

@Injectable({
    providedIn: 'root'
})

export class AboutService {
    private apiUri = `${environment.apiUri}/info`;

    constructor(private http: HttpClient) {}

    getAbout(){
        return this.http.get<InfoInterface>(`${this.apiUri}/about`)
    }
}
