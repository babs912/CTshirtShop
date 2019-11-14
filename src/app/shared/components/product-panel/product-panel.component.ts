import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent implements OnInit {
 public products: Product[] ;
 @Output() click = new  EventEmitter<number>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
  }


  getProduct(id: number){
      this.click.emit(id);
  }



}
