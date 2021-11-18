import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsdataService } from 'src/app/productsdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit ,AfterContentChecked, AfterContentInit{

  constructor(private dataService : ProductsdataService,
              private changeDetector : ChangeDetectorRef) { }

  products = this.dataService.products;
  cart = this.dataService.cart
  l=this.cart.entries()
  total = this.dataService.total
  ngOnInit(){


  }
  toint(s: string){

    return parseInt(s);
  }
  ngAfterContentChecked(): void {
    this.cart = this.dataService.cart
    this.changeDetector.detectChanges();
    

  this.total = this.dataService.total
  this.l = this.cart.entries()

  }
  ngAfterContentInit(){

    this.changeDetector.detectChanges();


  }
  addtocart(s:any){

    this.dataService.addToCart(s);
  }
  deltocart(s:any){
    this.dataService.delToCart(s);
  }
}