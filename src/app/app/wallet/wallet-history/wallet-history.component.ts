import {Component, OnInit} from '@angular/core';
import {ButtonSComponent} from "../../ui/elements/button-s/button-s.component";
import {TransferItemComponent} from "../../ui/elements/transfer-item/transfer-item.component";
import {TransferService} from "../../../service/transfer.service";
import {TokenService} from "../../../service/token.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-wallet-history',
  standalone: true,
  imports: [
    ButtonSComponent,
    TransferItemComponent,
    NgForOf
  ],
  templateUrl: './wallet-history.component.html',
  styleUrl: './wallet-history.component.css'
})
export class WalletHistoryComponent implements OnInit {
  me: any
  transactions: any

  constructor(private transferService: TransferService,
              private tokenService: TokenService) {
  }


  ngOnInit() {
    this.tokenService.getMe().subscribe(value => {
      this.me = value;
    });

    this.transferService.getHistory(0).subscribe(value => {
      this.transactions = value
    });
  }


  getNumberItem(item: any): any {

    if (this.me == null) {
      return null;
    }

    var meId = this.me.id;

    if (item.senderId == meId) {
      return item.receivedPhone;
    } else {
      return item.senderPhone;
    }

  }

  getType(item: any): any {

    if (this.me == null) {
      return null;
    }

    var meId = this.me.id;

    if (item.senderId == meId) {
      return "remove";
    } else {
      return "add";
    }

  }
}
