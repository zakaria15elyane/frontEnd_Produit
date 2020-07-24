import { Component, OnInit } from '@angular/core';
import { ServicesProduitsService } from '../services/services-produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyInterface } from '../my-interface';

@Component({
  selector: 'app-voir-produit',
  templateUrl: './voir-produit.component.html',
  styleUrls: ['./voir-produit.component.css']
})
export class VoirProduitComponent implements OnInit {

  constructor(private servicesProduitsService:ServicesProduitsService,private activatedRoute:ActivatedRoute,private router:Router) { }

  public id:any;
  public produits:MyInterface;
  ngOnInit(): void {
    let idProduit=parseInt(this.activatedRoute.snapshot.paramMap.get('idProduit'));
    this.id=idProduit;
    this.servicesProduitsService.getOneProduit(this.id).subscribe(data=>{
      this.produits=data;
    })
  }

}
