import { JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,DecimalPipe,JsonPipe,SlicePipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  public Name="HELLO EveryOne ";
  public Value : number =12.3456785554;
  public Book =
  {
    "Name ": "Let us C",
    "Price" : " 520",
    "Author" : " Y Kantenkar"
  };

}
