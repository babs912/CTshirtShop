import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  
  public designs = [
    {
      id: 1,
      name: "design 1",
      url: "d1.png"
    },
    {
      id: 2,
      name: "design 2",
      url: "d2.png"
    },
    {
      id: 3,
      name: "design 3",
      url: "d3.png"
    },
    {
      id: 4,
      name: "design 4",
      url: "d17.png"
    },
    {
      id: 5,
      name: "design 5",
      url: "d5.png"
    },
    {
      id: 6,
      name: "design 6",
      url: "d6.png"
    },
    {
      id: 7,
      name: "design 7",
      url: "d7.png"
    },
    {
      id: 8,
      name: "design 8",
      url: "d8.png"
    },
    {
      id: 9,
      name: "design 9",
      url: "d9.png"
    },
    {
      id: 10,
      name: "design 10",
      url: "d10.png"
    },
    {
      id: 11,
      name: "design 11",
      url: "d11.png"
    },
    {
      id: 12,
      name: "design 12",
      url: "12.png"
    },
    {
      id: 13,
      name: "design 13",
      url: "d22.jpeg"
    },
    {
      id: 14,
      name: "design 14",
      url: "d14.png"
    },
    {
      id: 15,
      name: "design 15",
      url: "d15.png"
    }


  ];
  constructor() { }

  getDesignById (id: number) {
    return this.designs.find(( product=>product.id == id))
  }
}
