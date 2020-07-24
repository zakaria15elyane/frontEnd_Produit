import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesProduitsService } from '../services/services-produits.service';
import { MyInterface } from '../my-interface';



@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  constructor(private servicesProduitsService:ServicesProduitsService,private router:Router,private activatedRoute:ActivatedRoute) { }
  produits: MyInterface= {
  id:null,
  designation:null,
  prix:null,
  quantite:null,
  }
  public id:any;
public produit:any;
public idProduit;

  ngOnInit() :void {

    let idProduit=parseInt(this.activatedRoute.snapshot.paramMap.get('idProduit'));
    this.id=idProduit;
    this.servicesProduitsService.getOneProduit(this.id)
    .subscribe(data=>{
      this.produits=data;
    },error=>{
      console.log(error);
    });
    }

   updateProduit(value: any){
    this.servicesProduitsService.updateProduit(this.produits.id,value)
    .subscribe(data=>{
       this.router.navigate(['produits']);

    },error=>{
      console.log("error");
    });
}}
