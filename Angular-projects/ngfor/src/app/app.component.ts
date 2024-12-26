import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public City =["Pune","Mumbai","Satara","Nashik","Kolhapur"];

  // for (i=0;i<City.length;i++)
  // {
  //   console.log(City[i]);
  // }
}
