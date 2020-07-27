import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { VoirProduitComponent } from './voir-produit/voir-produit.component';
import { Error404Component } from './error404/error404.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:"produits",component:ProduitsComponent},
  {path:"ajoute-produits",component:AddProduitComponent},
  {path:"edit-produits/:idProduit",component:EditProduitComponent},
  {path:"voir-produit/:idProduit",component:VoirProduitComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
