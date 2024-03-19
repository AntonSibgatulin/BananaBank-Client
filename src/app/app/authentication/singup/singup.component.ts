import {Component} from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    ButtonKeepComponent
  ],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  constructor(private router: Router) {
  }

  navigateSignIn() {
    this.router.navigate(['/auth/signin'])
  }
}
