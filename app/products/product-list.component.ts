import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from "./product.service";

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html'
})

export class ProductListComponent implements OnInit{
     pageTitle:string="Product list";
     showImage:boolean=false;
     imageWidth:number=50;
     listFilter:string;
     listView:boolean=false;
     gridView:boolean=true;
     errorMessage:string
     products:IProduct[]

     constructor(private _productService:ProductService){

     }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
       this._productService.getProduct()
        .subscribe(products =>this.products=products,
        error=>this.errorMessage = error)
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Product List::'+message
    }
    showList(): void{
        this.gridView=false;
        this.listView=true
    }
    showGrid(): void{
        this.listView=false;
        this.gridView=true;
    }
}