import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { SellerComponent } from './seller/seller.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
    path: 'member',
    component: MembersComponent,
    },
    {
    path: 'product',
    component: ProductComponent,
    },
    {
    path: 'seller',
    component: SellerComponent,
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
