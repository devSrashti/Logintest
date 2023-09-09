import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  productList:any[] = [];

   /**
    *
    */
   constructor(private router:Router) {
    
    for (let index = 0; index < 55; index++) {
      this.productList.push('productname');
      
    }


  

   }
   onClickproduct(){

    this.router.navigate(['/product']);
    
        }

}
