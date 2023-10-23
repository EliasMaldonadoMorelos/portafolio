import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


const routes: Routes = [
{ path: '', redirectTo: '/principal', pathMatch: 'full'},
{ path: 'Quienes-Somos', component: QuiensomosComponent},
{ path: 'principal', component: PrincipalComponent },
{ path: 'contacto', component: ContactanosComponent},
{ path: 'proyectos', component: ProyectosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
