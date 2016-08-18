import {Component} from "@angular/core";

@Component({
    selector: "intercom",
    template: require("./intercom.component.pug"),
    styles: [ require("!raw!sass!./intercom.component.scss") ]
})
export class IntercomComponent {

}
