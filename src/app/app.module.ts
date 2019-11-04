import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';

@NgModule({
  entryComponents:[ProductItemComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceComponent,
    LoginComponent,
    NotFoundComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
