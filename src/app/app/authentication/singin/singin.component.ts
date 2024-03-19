import {Component} from '@angular/core';
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [
    ButtonKeepComponent,
    ButtonAcceptComponent
  ],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  constructor(private router: Router) {
  }

  navigateSignUp() {
    this.router.navigate(['/auth'])
  }
}
