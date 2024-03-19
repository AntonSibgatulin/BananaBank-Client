import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonDeleteComponent} from "../../ui/elements/button-delete/button-delete.component";
import {ButtonAddComponent} from "../../ui/elements/button-add/button-add.component";
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    ButtonDeleteComponent,
    ButtonAddComponent,
    ButtonAcceptComponent,
    ButtonKeepComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  constructor(private router: Router) {
  }


  navigateTransfer() {
    this.router.navigate(['/wallet/transfer'])
  }
}
