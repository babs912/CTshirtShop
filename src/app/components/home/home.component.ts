import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products = [
    {
      id: 1,
      name: "product 1",
      price: 2000
    },
    {
      id: 2,
      name: "product 2",
      price: 1500
    },
    {
      id: 3,
      name: "product 3",
      price: 3000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
