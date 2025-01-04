import { Routes } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomComponent } from './welcom/welcom.component';

export const routes: Routes = [
   
    {
        path : '',component : WelcomComponent
    },
    { //specific route
        path : 'batchdetails',component : BatchdetailsComponent
    },

    {
        path: 'batchlist',//specific route
        component : BatchlistComponent
    }, 
    {
        path: "**", //wildcard route
        component: InvalidComponent
    }

    
    
];
