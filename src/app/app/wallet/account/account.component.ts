import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonDeleteComponent} from "../../ui/elements/button-delete/button-delete.component";
import {ButtonAddComponent} from "../../ui/elements/button-add/button-add.component";
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {TransferService} from "../../../service/transfer.service";
import {TokenService} from "../../../service/token.service";
import {NgForOf} from "@angular/common";
import {AccountService} from "../../../service/account.service";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    ButtonDeleteComponent,
    ButtonAddComponent,
    ButtonAcceptComponent,
    ButtonKeepComponent,
    NgForOf
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  me: any

  constructor(private router: Router,
              private transferService: TransferService,
              private tokenService: TokenService,
              private accountService: AccountService,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.reload()
  }


  navigateTransfer() {
    this.router.navigate(['/wallet/transfer'])
  }

  getName(): any {
    if (this.me == null) return null;
    if (this.me.firstname != null && this.me.lastname) {
      return this.me.firstname + " " + this.me.lastname;
    } else {
      return "@" + this.me.login;
    }
  }

  deletePhone(id: any) {
    this.accountService.deletePhone(id).subscribe(value => {


      this.reload();
    })
  }

  reload() {
    this.tokenService.getMe().subscribe(value => {
      this.me = value;
    });
  }

  deleteEmail(id: any) {
    this.accountService.deleteEmail(id).subscribe(value => {
      this.reload();
    })
  }


  addPhone() {
    let phone = this.elementRef.nativeElement.querySelector("input[name='phone']").value
    let obj = {
      phone: phone
    }
    this.accountService.addPhone(obj).subscribe(value => {
      this.reload()
      this.elementRef.nativeElement.querySelector("input[name='phone']").value = "";
    }, error => {
      alert(error.error.message)
    })
  }


  addEmail() {
    let email = this.elementRef.nativeElement.querySelector("input[name='email']").value
    let obj = {
      email: email
    }
    this.accountService.addEmail(obj).subscribe(value => {
      this.reload()
      this.elementRef.nativeElement.querySelector("input[name='email']").value = "";
    }, error => {
      alert(error.error.message)
    })
  }

  logout() {
    this.tokenService.exit();
    this.router.navigate(['/'])
  }
}
