import { Component, OnInit } from '@angular/core';
import { FormdataService } from 'src/app/formdata.service';
import { ProductsdataService } from 'src/app/productsdata.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(private detailsForm : FormdataService, private dataService : ProductsdataService,private changeDetector : ChangeDetectorRef) { }

  details = this.detailsForm.detailsForm
  today = Date.now();
  

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
  print(){

    window.print();
  }

}
