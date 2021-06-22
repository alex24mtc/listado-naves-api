import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  starships: any;
  url: any;
  page: number = 0;

  constructor(private http: HttpClient, private router: RouterModule) {
    this.url = 'http://swapi.dev/api/';
  }

  getData() {
    this.page+=1;
    //return this.http.get('http://swapi.dev/api/starships/')
    return this.http.get(this.url + 'starships/?page=' + this.page);
  }
  getStarShipByName(name: string): any {
    return this.starships.find((element: any) => element.name === name);
  }
}
