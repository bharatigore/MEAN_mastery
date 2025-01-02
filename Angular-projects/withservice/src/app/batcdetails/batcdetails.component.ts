import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batcdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batcdetails.component.html',
  styleUrl: './batcdetails.component.css'
})
export class BatcdetailsComponent
 {
  public Batches : any=[];


 public  constructor(private batchobj : BatchesService)
  {
    this.Batches=batchobj.GetBatches();
  }

}
