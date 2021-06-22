
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarshipsService } from 'src/app/services/starships.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  starships:any;
  



  constructor(private router:RouterModule,
                private starshipsService:StarshipsService){ }

  

  ngOnInit(): void {
    
    this.starshipsService.getData().subscribe(
      response=>{
        let res:any;
        res=response; //recolectar respuesta de la api en esta variable
        this.starships=res.results; //accede al array results, y lo guarda en starships
        this.starshipsService.starships=res.results; //guardo los datos al servicio
      },
      error=>{
        console.log('error');
      }

    )


  }




}
