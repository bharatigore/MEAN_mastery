import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batchelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchelist.component.html',
  styleUrl: './batchelist.component.css'
})
export class BatchelistComponent {

  public Batches : any=[]
  public constructor(private batchobj : BatchesService)
  {
    this.Batches=batchobj.GetBatches();

  }

}
