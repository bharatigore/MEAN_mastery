import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit
 {
  message : string='';
  constructor(private service: MarvellousService){}

  ngOnInit(): void {
      this.service.getBatches().subscribe((data:any)=>
      {
        this.message=JSON.stringify(data);
      },
      (error)=>
      {
        console.log("Error fecthing data:",error);
      }
      );
  }
}
