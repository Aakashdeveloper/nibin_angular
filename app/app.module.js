"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about.component");
var product_list_component_1 = require("./products/product-list.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var product_service_1 = require("./products/product.service");
var product_detail_compoment_1 = require("./products/product-detail.compoment");
var home_component_1 = require("./home/home.component");
var notfound_component_1 = require("./shared/notfound.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', component: product_detail_compoment_1.ProductDetail },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: notfound_component_1.NotFoundComponent },
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            star_component_1.StarComponent,
            home_component_1.HomeComponent,
            notfound_component_1.NotFoundComponent,
            product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipe,
            product_detail_compoment_1.ProductDetail
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map