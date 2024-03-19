import { Component } from '@angular/core';
import {ButtonSComponent} from "../../ui/elements/button-s/button-s.component";
import {TransferItemComponent} from "../../ui/elements/transfer-item/transfer-item.component";

@Component({
  selector: 'app-wallet-history',
  standalone: true,
  imports: [
    ButtonSComponent,
    TransferItemComponent
  ],
  templateUrl: './wallet-history.component.html',
  styleUrl: './wallet-history.component.css'
})
export class WalletHistoryComponent {

}
