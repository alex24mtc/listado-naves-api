
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarshipsService } from 'src/app/services/starships.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  starships:any=[];

  constructor(private router: RouterModule,
    private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.starshipsService.getData().subscribe(
      response => {
        let res: any;
        res = response; //recolectar respuesta de la api en esta variable
        this.starships = [...this.starships,...res.results]; //el split operator puedes mergear dos arrays
        this.starshipsService.starships = this.starships; //guardo los datos al servicio
      },
      error => {
        console.log('error');
      }

    )

  }

  



}
