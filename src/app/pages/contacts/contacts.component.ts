import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../shared/services/info.service";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})

export class ContactsComponent implements OnInit {
    contacts?: string;
    email?: string;

    constructor(private infoService: InfoService) {}

    ngOnInit() {
        this.infoService
            .getInfo('contactsText')
            .subscribe((data) => {this.contacts = data.value});

        this.infoService
            .getInfo('contactsEmail')
            .subscribe((data) => {this.email = data.value});
    }
}
