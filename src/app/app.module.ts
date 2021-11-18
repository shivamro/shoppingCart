import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsdataService } from './productsdata.service';
import { FormsModule } from '@angular/forms';
import { FormdataService } from './formdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsdataService , FormdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
