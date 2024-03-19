import {Component} from '@angular/core';
import {Route, Router, RouterOutlet, ɵEmptyOutletComponent} from "@angular/router";
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {LogotypeComponent} from "../../ui/elements/logotype/logotype.component";
import {TopPanelNoAuthComponent} from "../../ui/elements/top-panel-no-auth/top-panel-no-auth.component";

@Component({
  selector: 'app-auth-index',
  standalone: true,
  imports: [
    ɵEmptyOutletComponent,
    ButtonAcceptComponent,
    ButtonKeepComponent,
    RouterOutlet,
    LogotypeComponent,
    TopPanelNoAuthComponent
  ],
  templateUrl: './auth-index.component.html',
  styleUrl: './auth-index.component.css'
})
export class AuthIndexComponent {



}
