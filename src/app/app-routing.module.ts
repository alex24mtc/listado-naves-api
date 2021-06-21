import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listado', 
    pathMatch:'full'
  },
  {
    path:'listado',
    component: ListadoComponent
  },
  {
    path:'listado/:id',
    component: DetalleComponent
  }, 
    
  {
    path:'**',
    redirectTo: 'listado', 
    pathMatch:'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
