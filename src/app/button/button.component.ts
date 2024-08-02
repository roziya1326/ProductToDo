import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string=""
  // @Output() myEvent = new EventEmitter();
 
  alertEvent(){
    // this.myEvent.emit();
    alert("Hello")
  }
}