import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id: 1,
      name: "product 1",
      price: 2000,
      img_url:"p1.png"
    },
    {
      id: 2,
      name: "product 2",
      price: 1500,
      img_url:"p2.png"
    },
    {
      id: 3,
      name: "product 3",
      price: 3000,
      img_url:"p3.png"
    }
  ]


  constructor() { }


   getProductById (id: number) {
    return this.products.find(( product=>product.id == id))
  }
     
  
}
