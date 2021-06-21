import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailStarship } from '../../interfaces/detail-starship';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:RouterModule){ }

  starships:string[]=[];
  starship:DetailStarship;
  

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    const urls = [
      'http://swapi.dev/api/starships/2',
      'http://swapi.dev/api/starships/3',
      'https://swapi.dev/api/starships/5/',
      'https://swapi.dev/api/starships/9/',
      'https://swapi.dev/api/starships/10/',
      'https://swapi.dev/api/starships/11/',
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/13/',
      'https://swapi.dev/api/starships/15/',
      'https://swapi.dev/api/starships/17/'
     

    ];

  
    
    (async () => {
      
      try {
        const allResponses = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        );
        console.log(allResponses[0]);

        this.starships=allResponses;
        /*
        document.write(allResponses[0].name,
          
          );
        */
        
      } catch(e) {
        console.log(e);
        // handle errors
      }
    })();
  }









}
