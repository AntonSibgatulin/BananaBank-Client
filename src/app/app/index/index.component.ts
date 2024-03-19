import {Component} from '@angular/core';
import {ButtonAcceptComponent} from "../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../ui/elements/button-keep/button-keep.component";
import {LogotypeComponent} from "../ui/elements/logotype/logotype.component";
import {Router} from "@angular/router";
import {TopPanelNoAuthComponent} from "../ui/elements/top-panel-no-auth/top-panel-no-auth.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    ButtonKeepComponent,
    LogotypeComponent,
    TopPanelNoAuthComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(private router: Router) {
  }

  navigateSignIn() {
    this.router.navigate(['/auth/signin'])
  }

  navigateSignUp() {
    this.router.navigate(['/auth'])
  }
}
