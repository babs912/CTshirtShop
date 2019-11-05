import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 products: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.products = this.productService.products;
  }
 

  ngOnInit() {
    
  }

  GotoProductDetails(id)
  {
   this.router.navigate(['product',id]);
    
  }

  

  

}
