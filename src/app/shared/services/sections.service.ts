import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { SectionsInterface} from "../interfaces/sections.interface";


@Injectable({
    providedIn: 'root'
})

export class SectionsService {

    private apiUri = `${environment.apiUri}/sections`;

    constructor(private http: HttpClient) {}

    getSections(): Observable<SectionsInterface> {
        return this.http.get<SectionsInterface>(this.apiUri);
    }
}
