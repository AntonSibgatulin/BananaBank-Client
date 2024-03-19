import { Component } from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonSComponent} from "../../ui/elements/button-s/button-s.component";
import {TransferItemComponent} from "../../ui/elements/transfer-item/transfer-item.component";

@Component({
  selector: 'app-wallet-transfer',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    ButtonSComponent,
    TransferItemComponent
  ],
  templateUrl: './wallet-transfer.component.html',
  styleUrl: './wallet-transfer.component.css'
})
export class WalletTransferComponent {

}
