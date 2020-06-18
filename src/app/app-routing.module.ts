import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PersonaComponent } from 'src/app/components/persona/persona.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ProyectoComponent } from 'src/app/components/proyecto/proyecto.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { EntradaComponent } from 'src/app/components/entrada/entrada.component';
import { InformeComponent } from 'src/app/components/informe/informe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personas', component: PersonaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyectos', component: ProyectoComponent },
  { path: 'registros', component: RegistroComponent },
  { path: 'entradas', component: EntradaComponent },
  { path: 'informes', component: InformeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
