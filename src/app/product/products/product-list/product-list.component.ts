import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from 'src/app/productsdata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private dataService : ProductsdataService) { }
  products = this.dataService.getProducts();
  addtocart(id:string){

    console.log(id);
    this.dataService.addToCart(id);
  }
  ngOnInit(): void {

  }

}
