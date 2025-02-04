import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './second/admin/admin.component';
import { StaffComponent } from './first/staff/staff.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminComponent,StaffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modular';
}
