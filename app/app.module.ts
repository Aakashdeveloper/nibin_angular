import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";
import { NotFoundComponent } from "./shared/notfound.component";

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotFoundComponent}
    ])
   
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
