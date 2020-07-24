import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VoirProduitComponent } from './voir-produit/voir-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { Error404Component } from './error404/error404.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProduitsComponent,
    VoirProduitComponent,
    AddProduitComponent,
    EditProduitComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
