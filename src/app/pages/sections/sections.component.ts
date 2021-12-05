import { Component, OnInit } from '@angular/core';
import { SectionsService } from "../../shared/services/sections.service";
import { Direction, Section, SectionsInterface, Topic } from "../../shared/interfaces/sections.interface";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
})

export class SectionsComponent implements OnInit {
    sectionsInterface?: SectionsInterface;
    currentSection?: Section;

    constructor(
        private sectionService: SectionsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.getSection();
    }

    chooseSection(id: number): void {
        this.currentSection = this.sectionsInterface?.sections.find(section => section.id === id);
    }

    closeSections(): void {
        this.router.navigate(['/sections']).then();
    }

    chooseDirection(section: Section, direction: Direction): void {
        if (this.isCurrentSection(section)) {
            this.router.navigate([direction.id], { relativeTo: this.route }).then();
        }
    }

    chooseTopic(section: Section, direction: Direction, topic: Topic): void {
        if (this.isCurrentSection(section)) {
            this.router.navigate([direction.id, topic.id], { relativeTo: this.route }).then();
        }
    }

    isCurrentSection(section: Section): boolean {
        return section.id === this.currentSection?.id;
    }

    isCurrentSectionNotEmpty(): boolean {
        return this.currentSection !== undefined;
    }

    getSection(): void {
        this.sectionService
            .getSections()
            .subscribe((data: SectionsInterface) => {
                this.sectionsInterface = data;
                const currentUrl = this.route.snapshot.url;
                if (currentUrl.length === 2) {
                    this.chooseSection(+(currentUrl.pop()?.path ?? ''));
                }
            });
    }
}
