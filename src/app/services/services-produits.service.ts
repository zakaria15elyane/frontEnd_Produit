import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from '../my-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesProduitsService {
public host: string = "http://localhost:8080/api/v1";
  constructor(private httpClient: HttpClient) { }

 public getAllProduit(page:number,size:number){
    return this.httpClient.get<MyInterface>(this.host+"/produits?page="+page+"&size="+size);
  }
  public deleteProduit(id:number){
    return this.httpClient.delete(`${this.host}/produits/${id}`);
  }
  public saveProduit(host:any,data:any){
    return this.httpClient.post(host+"/produits",data);
  }
  public getOneProduit(id:number){
    return this.httpClient.get<MyInterface>(this.host+"/produits/"+id);
  }
  public updateProduit(id,data){
    return this.httpClient.put(this.host+"/produits/"+id,data);
  }
  public getProduitByKeyword(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }

}
