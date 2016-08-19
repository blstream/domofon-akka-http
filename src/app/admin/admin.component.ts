import {Component} from "@angular/core";

@Component({
    selector: "admin",
    template: require("./admin.component.pug"),
    styles: [ require("!raw!sass!./admin.component.scss") ]
})
export class AdminComponent {

}
