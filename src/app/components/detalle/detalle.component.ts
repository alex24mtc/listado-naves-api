import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailStarship } from 'src/app/interfaces/detail-starship';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  
  starships:string[]=[];
  starship:DetailStarship;

  constructor(private httpClient:HttpClient, private router:RouterModule) { }

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
