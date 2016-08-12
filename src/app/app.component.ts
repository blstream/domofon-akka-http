import {Component} from "@angular/core";

@Component({
    selector: "domofon-app",
    template: require("./app.component.pug"),
    styles: [ require("!raw!sass!./app.component.scss") ]
})
export class AppComponent {

}
