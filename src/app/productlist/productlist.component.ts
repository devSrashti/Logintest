import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      this.productList.push({ id: index});
      
    }


  

   }
   onClickproduct(){

    this.router.navigate(['/product']);
    
        }

}
