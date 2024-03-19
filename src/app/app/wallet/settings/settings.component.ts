import { Component } from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";

@Component({
  selector: 'app-settings',
  standalone: true,
    imports: [
        ButtonAcceptComponent
    ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
