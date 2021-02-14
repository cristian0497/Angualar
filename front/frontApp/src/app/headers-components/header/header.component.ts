import {Component} from '@angular/core';

@Component({
    selector: "header-comp",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class Header_comp {
    public message: String = "Finanza-App header";

}