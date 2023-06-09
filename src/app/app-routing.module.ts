import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./pages/about/about.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { SectionsComponent } from "./pages/sections/sections.component";
import { DirectionComponent } from "./pages/direction/direction.component";
import { TopicComponent } from "./pages/topic/topic.component";

const routes: Routes = [
    { path: '', redirectTo: 'sections', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'sections', component: SectionsComponent, pathMatch: 'full'  },
    { path: 'sections/:sectionId', component: SectionsComponent, pathMatch: 'full'  },
    { path: 'sections/:sectionId/:directionId', component: DirectionComponent, pathMatch: 'full'  },
    { path: 'sections/:sectionId/:directionId/:topicId', component: TopicComponent, pathMatch: 'full'  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
