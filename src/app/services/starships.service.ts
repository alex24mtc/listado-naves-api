import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

    
  starships:any;
  url:any;
  

  constructor(private http:HttpClient, private router:RouterModule) { 
    this.url='http://swapi.dev/api/';
  }

  getData(){
    
   //return this.http.get('http://swapi.dev/api/starships/')
   return this.http.get(this.url+'starships/');
    
    }

    getStarShipByName(name:string):any{
      this.starships.find((element:any)=>element.name===name);
    
    }

  
}
