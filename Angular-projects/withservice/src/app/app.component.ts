import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatcdetailsComponent } from './batcdetails/batcdetails.component';
import { BatchelistComponent } from './batchelist/batchelist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BatcdetailsComponent,BatchelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'withservice';
}
