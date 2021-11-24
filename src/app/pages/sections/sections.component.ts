import { Component, OnInit } from '@angular/core';
import { SectionsService } from "../../shared/services/sections.service";
import { SectionsInterface } from "../../shared/interfaces/sections.interface";

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
})

export class SectionsComponent implements OnInit {
    sectionsInterface?: SectionsInterface;

    constructor(private sectionService: SectionsService) {}

    ngOnInit() {
       this.getSection();
    }

    getSection(): void {
        this.sectionService
            .getSections()
            .subscribe((data: SectionsInterface) => {
                this.sectionsInterface = data;
            });
    }
}
