import {Component, Input, input} from '@angular/core';
import {ButtonSComponent} from "../button-s/button-s.component";

@Component({
  selector: 'app-transfer-item',
  standalone: true,
  imports: [
    ButtonSComponent
  ],
  templateUrl: './transfer-item.component.html',
  styleUrl: './transfer-item.component.css'
})
export class TransferItemComponent {

  @Input() phone: any
  @Input() amount: any
  @Input() type: any
  @Input() status: any
  @Input() time: any


  getAmount() {
    if (this.type.toLowerCase() == "ADD".toLowerCase()) {
      return "+" + this.amount + "$";
    } else {
      return "-" + this.amount + "$";
    }
  }

  getTime(time: any) {
    return new Date(Number(time))
  }
}
