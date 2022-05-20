import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product-details/:productId', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
