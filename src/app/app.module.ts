import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroNavComponent } from './hero-nav/hero-nav.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent },
      { path: 'myshop', component: ProductListComponent },
      {
        path: 'myshop/products/:productId',
        component: ProductDetailsComponent,
      },
      { path: 'myshop/cart', component: CartComponent },
      { path: 'myshop/shipping', component: ShippingComponent },
      { path: 'dashboard', component: HeroesDashboardComponent },
      { path: 'heroes', component: HeroListComponent },
      { path: 'heroes/:heroId', component: HeroDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeroesDashboardComponent,
    HeroCardComponent,
    HeroNavComponent,
    HeroListComponent,
    HeroDetailComponent,
    FrontPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
