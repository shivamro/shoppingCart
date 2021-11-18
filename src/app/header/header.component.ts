import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService : ProductsdataService) { }
  items = this.dataService.cart
  ngOnInit(): void {

  }

}
