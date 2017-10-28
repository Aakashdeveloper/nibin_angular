import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import { ProductListComponent } from "./products/product-list.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetail } from "./products/product-detail.compoment";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./shared/notfound.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',component:ProductDetail},
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotFoundComponent},
    ])
   
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    StarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductFilterPipe,
    ProductDetail
  ],
  bootstrap: [ AppComponent ],
  providers:[ProductService]
})

export class AppModule { }
