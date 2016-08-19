import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MdCardModule } from "@angular2-material/card/card";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { IntercomComponent } from "./intercom/intercom.component";
import { EventWizardComponent } from "./event-wizard/event-wizard.component";

const routes = [
    {
        path: "intercom",
        component: IntercomComponent
    },
    {
        path: "event-wizard",
        component: EventWizardComponent
    },
    {
        path: "admin",
        component: AdminComponent
    }
];

@NgModule({
    imports: [ BrowserModule, FormsModule, MdCardModule, RouterModule.forRoot(routes, { useHash: true }) ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }