import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PpaComponent } from './ppa/ppa.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PpaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}