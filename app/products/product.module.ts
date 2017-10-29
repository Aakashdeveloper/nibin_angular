import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { ProductDetail } from "./product-detail.compoment";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',component:ProductDetail},
        ])

    ],
    declarations:[
            ProductListComponent,
            ProductFilterPipe,
            ProductDetail
    ],
    providers:[ProductService]
})

export class  ProductModule{}