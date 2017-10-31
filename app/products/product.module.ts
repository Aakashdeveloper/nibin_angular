import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { ProductDetail } from "./product-detail.compoment";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailGaurd } from "./product-gaurd.service";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',canActivate:[ProductDetailGaurd],component:ProductDetail},
        ])

    ],
    declarations:[
            ProductListComponent,
            ProductFilterPipe,
            ProductDetail
    ],
    providers:[ProductService,
                ProductDetailGaurd]
})

export class  ProductModule{}