import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { UserName } from './user.interface';

/*import {ThemePalette} from '@angular/material/core';*/

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [HttpService]
})

export class AppComponent implements OnInit{
    users: UserName[] = [];
    copyright?: string;

    constructor(private httpService: HttpService) {}

    ngOnInit(){
        this.httpService
            .getCopyright()
            .subscribe((data) => {this.copyright = data.value})

        this.httpService
            .getUsers()
            .subscribe((data) => {this.users = data.userList})
    }

    title = 'mc-frontend';
    /*background: ThemePalette = 'primary';
    toggleBackground() {
        this.background = this.background ? 'primary' : undefined;
    }*/
}
