import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ColorPickerModule } from 'ngx-color-picker';
import { DesignPanelComponent } from './shared/components/design-panel/design-panel.component';
import { ProductPanelComponent } from './shared/components/product-panel/product-panel.component';
@NgModule({
  entryComponents:[ProductItemComponent, NavbarComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceComponent,
    LoginComponent,
    NotFoundComponent,
    ProductItemComponent,
    NavbarComponent,
    ProductDetailsComponent,
    DesignPanelComponent,
    ProductPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ColorPickerModule,
    

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
