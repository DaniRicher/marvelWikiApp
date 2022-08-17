import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicsComponent } from './comics/comics.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { InfoComicsComponent } from '../components/info-comics/info-comics.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'personajes', component: PersonajesComponent },
      { path: 'personajes/:id', component: InformacionComponent },
      { path: 'comics', component: ComicsComponent },
      { path: 'comics/:id', component: InfoComicsComponent },
      { path: '**', redirectTo: '/dashboard' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
