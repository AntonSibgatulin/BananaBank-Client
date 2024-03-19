import {Component} from '@angular/core';
import {ButtonAcceptComponent} from "../button-accept/button-accept.component";
import {ButtonKeepComponent} from "../button-keep/button-keep.component";
import {LogotypeComponent} from "../logotype/logotype.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-panel-no-auth',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    ButtonKeepComponent,
    LogotypeComponent
  ],
  templateUrl: './top-panel-no-auth.component.html',
  styleUrl: './top-panel-no-auth.component.css'
})
export class TopPanelNoAuthComponent {
  constructor(private router: Router) {
  }

  navigateSignIn() {
    this.router.navigate(['/auth/signin'])
  }

  navigateSignUp() {
    this.router.navigate(['/auth/'])
  }

  navigateIndex() {
    this.router.navigate(['/'])
  }
}
