import {Component, OnInit} from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {LogotypeComponent} from "../../ui/elements/logotype/logotype.component";
import {Router, RouterOutlet} from "@angular/router";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-wallet-index',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    LogotypeComponent,
    RouterOutlet
  ],
  templateUrl: './wallet-index.component.html',
  styleUrl: './wallet-index.component.css'
})
export class WalletIndexComponent {


  constructor(private router: Router) {
  }

  navigateTransfer() {
    this.router.navigate(['/wallet/transfer'])
  }

  navigateHistory() {
    this.router.navigate(['/wallet/history'])
  }

  navigateSettings() {
    this.router.navigate(['/wallet/settings'])
  }

  navigateAccount() {
    this.router.navigate(['/wallet/account'])
  }

  navigateIndex() {
    this.router.navigate(['/'])
  }


}
