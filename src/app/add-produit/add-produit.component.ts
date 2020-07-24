import { Component, OnInit } from '@angular/core';
import { ServicesProduitsService } from '../services/services-produits.service';
import {ActivatedRoute,Router } from '@angular/router';
import { MyInterface } from '../my-interface';



@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private servicesProduitsService:ServicesProduitsService,private activatedRoute:ActivatedRoute,private router:Router) { }
public produits:MyInterface={
  id:null,
  designation:null,
  prix:null,
  quantite:null,
};
  ngOnInit(): void {
  }
  public ajouteProduits(data:any){
    this.servicesProduitsService.saveProduit(this.servicesProduitsService.host,data)
    .subscribe(response=>{
      this.router.navigateByUrl("produits")
      console.log(data);
    }, err => {
      console.log(err);
    });

  }}
  /*viderInputs(){
    this.produit={
    id:'',
    designation:"",
    prix:'',
    quantite:'',
  }

}*/

