import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  activeButtonColor = '#AAFF00'
  inactiveButtonColor = 'rgba(255, 255, 255, 0.25)'
  color: string = this.inactiveButtonColor;
  isActive = false;

  @Input() text: string = '';
  // @Input() price: number = 0;
  @Output() btnClick = new EventEmitter<boolean>()

  onClick = (value: boolean) => {
    this.btnClick.emit(value);
    if(this.isActive === false){
      this.color=this.activeButtonColor
      this.isActive=!this.isActive
    }else{
      this.color=this.inactiveButtonColor
      this.isActive=!this.isActive
    }
  }

}
