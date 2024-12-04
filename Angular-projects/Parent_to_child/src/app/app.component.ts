import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { MarvellousComponent } from './marvellous/marvellous.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Parentto_child';

  public Message= " Hello Child...";
}
