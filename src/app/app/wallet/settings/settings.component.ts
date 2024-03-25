import {Component, ElementRef, OnInit} from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {TokenService} from "../../../service/token.service";
import {AccountService} from "../../../service/account.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ButtonAcceptComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  sendSetting = false
  me: any

  constructor(private tokenService: TokenService,
              private elementRef: ElementRef,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.tokenService.getMe().subscribe(value => {
      this.me = value
    })
  }

  getLogin(): any {
    if (this.me == null) return null;
    if (this.me.firstname != null && this.me.lastname) {
      return this.me.firstname + " " + this.me.lastname;
    } else {
      return "@" + this.me.login;
    }
  }

  getName(): any {
    if (this.me == null) {
      return null;
    }
    if (this.me.firstname == null) {
      return null;
    } else {
      return this.me.firstname;
    }
  }

  getLastName(): any {
    if (this.me == null) {
      return null;
    }
    if (this.me.lastname == null) {
      return null;
    } else {
      return this.me.lastname;
    }
  }

  getSecondName(): any {
    if (this.me == null) {
      return null;
    }
    if (this.me.secondname == null) {
      return null;
    } else {
      return this.me.secondname;
    }
  }

  getDate(): any {
    if (this.me == null) {
      return null;
    }
    const birthDay = this.me.birthDay;

    if (birthDay == null) {
      return null;
    }
    const year = birthDay[0].toString().padStart(4, '0');
    const month = (birthDay[1]).toString().padStart(2, '0');
    let day = birthDay[2].toString().padStart(2, '0');

// Check if the day is a valid value, considering the month and year
    const lastDayOfMonth = new Date(year, birthDay[1], 0).getDate();
    if (day > lastDayOfMonth) {
      day = lastDayOfMonth.toString().padStart(2, '0');
    }

    const inputValue = `${year}-${month}-${day}`;
    return inputValue
  }


  update() {
    if (this.sendSetting) {
      return
    }
    this.sendSetting = true;

    var firstname = this.elementRef.nativeElement.querySelector("input[name='firstname']").value
    var lastname = this.elementRef.nativeElement.querySelector("input[name='lastname']").value
    var secondname = this.elementRef.nativeElement.querySelector("input[name='secondname']").value
    var birthDay = this.elementRef.nativeElement.querySelector("input[name='birthDay']").value
    let obj = {
      firstname: firstname,
      lastname: lastname,
      secondname: secondname,
      birthDay: birthDay
    }
    console.log(obj)

    this.accountService.saveSetting(obj).subscribe(value => {
      this.sendSetting = false;
    }, error => {
      alert(error.error.message)
      this.sendSetting = false;
    })
  }

}
