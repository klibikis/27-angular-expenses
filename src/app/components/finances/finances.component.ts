import { Component } from '@angular/core';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss']
})
export class FinancesComponent {

  totalPrice: number = 0;

  handleClick = (value: number, isActive: boolean) => {
    if(isActive){
      this.totalPrice -= value;
    }else{
      this.totalPrice += value;
    }
  }
}
