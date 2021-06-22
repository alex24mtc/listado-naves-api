import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StarshipsService } from 'src/app/services/starships.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  
  starships:any;

  constructor(
    private httpClient:HttpClient, 
    private router:RouterModule,
    private route:ActivatedRoute,
    private starshipsService:StarshipsService) { }

    ngOnInit(): void {
      
      this.getStarship();
    }
    
    getStarship(){
      const name= String(this.route.snapshot.paramMap.get('id'));
      this.starships=this.starshipsService.getStarShipByName(name);
      console.log(this.starships);
    }
    
  
  
}
