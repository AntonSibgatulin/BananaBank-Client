import {Component, ElementRef} from '@angular/core';
import {ButtonKeepComponent} from "../../ui/elements/button-keep/button-keep.component";
import {ButtonAcceptComponent} from "../../ui/elements/button-accept/button-accept.component";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [
    ButtonKeepComponent,
    ButtonAcceptComponent,
    HttpClientModule
  ],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  signInButton: boolean = false;

  constructor(private router: Router,
              private elementRef: ElementRef,
              private authService: AuthService,
              private tokenService: TokenService) {
  }

  navigateSignUp() {
    this.router.navigate(['/auth'])
  }


  signIn() {
    if (this.signInButton) {
      return;
    }
    this.signInButton = true;

    let login = this.elementRef.nativeElement.querySelector("input[name='login']").value;
    let password = this.elementRef.nativeElement.querySelector("input[name='password']").value;


    var obj = {
      login: login,
      password: password
    }
    this.authService.signIn(obj).subscribe(message => {
      console.log(message.token)
      this.tokenService.saveToken(message.token)

      this.router.navigate(['/wallet'])
    }, error => {
      console.log(error.error)
      alert(error.error.message)
      this.signInButton = false;
    })
  }


}
