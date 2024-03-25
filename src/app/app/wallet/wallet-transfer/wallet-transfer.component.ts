import {Component, ElementRef, OnInit} from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonSComponent} from "../../ui/elements/button-s/button-s.component";
import {TransferItemComponent} from "../../ui/elements/transfer-item/transfer-item.component";
import {TokenService} from "../../../service/token.service";
import {TransferService} from "../../../service/transfer.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-wallet-transfer',
  standalone: true,
  imports: [
    ButtonAcceptComponent,
    ButtonSComponent,
    TransferItemComponent,
    NgForOf
  ],
  templateUrl: './wallet-transfer.component.html',
  styleUrl: './wallet-transfer.component.css'
})
export class WalletTransferComponent implements OnInit {

  transactions: any

  me: any
  send = false
  balance: any

  constructor(private tokenService: TokenService,
              private elementRef: ElementRef,
              private transferService: TransferService) {
  }

  ngOnInit(): void {
    this.restart()
  }

  getBalance(): any {
    if (this.me == null) return null;
    return this.me.wallet.balance + "$";
  }

  getName(): any {
    if (this.me == null) return null;
    if (this.me.firstname != null && this.me.lastname) {
      return this.me.firstname + " " + this.me.lastname;
    } else {
      return "@" + this.me.login;
    }
  }

  transfer() {
    if (this.send) return;
    this.send = true;
    var receivedWalletId = this.elementRef.nativeElement.querySelector("input[name='receivedWalletId']").value;
    var receivedUserId = this.elementRef.nativeElement.querySelector("input[name='receivedUserId']").value;
    var phoneReceived = this.elementRef.nativeElement.querySelector("input[name='phoneReceived']").value;
    var amount = this.elementRef.nativeElement.querySelector("input[name='amount']").value;

    var obj = {
      receivedWalletId: receivedWalletId,
      receivedUserId: receivedUserId,
      phoneReceived: phoneReceived,
      amount: amount
    };


    this.transferService.transfer(obj).subscribe(value => {
      alert(value.message + ". Status: " + value.status)
      this.send = false;
      this.elementRef.nativeElement.querySelector("input[name='receivedWalletId']").value = "";
      this.elementRef.nativeElement.querySelector("input[name='receivedUserId']").value = "";
      this.elementRef.nativeElement.querySelector("input[name='phoneReceived']").value = "";
      this.elementRef.nativeElement.querySelector("input[name='amount']").value = "";
      var walletTransfer = this;

      setTimeout(function () {
        walletTransfer.restart();
      }, 2000)

    }, error => {
      alert(error.error.message)
      this.send = false
    })

  }

  restart() {
    this.tokenService.getMe().subscribe(value => {
      this.me = value;
      this.balance = this.me.wallet.balance;
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
