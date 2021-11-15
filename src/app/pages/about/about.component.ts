import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../shared/services/about.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
    about?: string;

    constructor(private aboutService: AboutService) {}

    ngOnInit() {
        this.aboutService
            .getAbout()
            .subscribe((data) => {this.about = data.value})
    }
}
