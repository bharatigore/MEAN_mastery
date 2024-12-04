import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent
 {
  //create the objects of event Emmiter
  @Output() public MyEvent = new EventEmitter();

  public SendMessage()
  {
    this.MyEvent.emit('Hello Parent..');
  }


}
