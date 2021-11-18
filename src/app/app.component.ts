import { Component, OnInit } from '@angular/core';
import { InfoService } from './shared/services/info.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    copyright?: string;

    constructor(private infoService: InfoService) {}

    ngOnInit(){
        this.infoService
            .getInfo('copyright')
            .subscribe((data) => {this.copyright = data.value})
    }

    title = 'mc-frontend';
}
