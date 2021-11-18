import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../shared/services/info.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
    about?: string;

    constructor(private infoService: InfoService) {}

    ngOnInit() {
        this.infoService
            .getInfo('about')
            .subscribe((data) => {this.about = data.value})
    }
}
