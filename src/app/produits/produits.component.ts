import { Component, OnInit } from '@angular/core';
import { ServicesProduitsService } from '../services/services-produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor(private servicesProduitsService:ServicesProduitsService,private router:Router) { }
public produits : any = [];
public size:number=5;
public currentPage:number=0;
public totalPages:number;
public pages:Array<number>;
private currentKeyword:string="";
  ngOnInit(): void {
    this.getAllProduit();
  }

  getAllProduit(){
    this.servicesProduitsService.getAllProduit(this.currentPage,this.size)
    .subscribe(data=>{
      this.produits=data;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);
    },error=>{
      console.log(error);
    });

  }

  deleteProduit(id:any){
    let conf = confirm("vous voulez vraiment supprimé ce produit");
    if(conf){
    this.servicesProduitsService.deleteProduit(id)
    .subscribe(data=>{
      this.getAllProduit();
      console.log(data);
    },error=>{
      console.log(error);
    });
  }}
  public saveProduit(){
    this.router.navigate(['/ajoute-produits']);
  }
  public updateProduit(id:any){
    this.router.navigate(['/edit-produits',id]);
  }

  voirProduit(id:any){
    this.router.navigate(['/voir-produit',id]);

  }

}
