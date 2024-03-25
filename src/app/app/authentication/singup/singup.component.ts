import {Component, ElementRef} from '@angular/core';
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {TokenService} from "../../../service/token.service";

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

  signUpButton: boolean = false

  constructor(private router: Router,
              private authService: AuthService,
              private elementRef: ElementRef,
              private tokenService: TokenService) {
  }

  signUp() {
    if (this.signUpButton) {
      return;
    }

    this.signUpButton = true;
    var login = this.elementRef.nativeElement.querySelector("input[name='login']").value
    var password = this.elementRef.nativeElement.querySelector("input[name='password']").value
    var email = this.elementRef.nativeElement.querySelector("input[name='email']").value
    var phone = this.elementRef.nativeElement.querySelector("input[name='phone']").value
    var startDeposit = this.elementRef.nativeElement.querySelector("input[name='startDeposit']").value


    let obj = {
      "login": login,
      "password": password,
      "email": email,
      "phone": phone,
      "startDeposit": startDeposit
    }


    this.authService.signUp(obj).subscribe(value => {
      let token = value.token;
      this.tokenService.saveToken(token);
      this.router.navigate(['/wallet/settings'])
    }, error => {
      alert(error.error.message)
      this.signUpButton = false;
    })

  }

  navigateSignIn() {
    this.router.navigate(['/auth/signin'])
  }
}
