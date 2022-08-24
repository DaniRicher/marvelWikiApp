import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicsComponent } from './comics/comics.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { InfoComicsComponent } from '../components/info-comics/info-comics.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'personajes', component: PersonajesComponent, data: { titulo: 'Personajes' } },
      { path: 'personajes/:id', component: InformacionComponent, data: { titulo: 'Personajes' } },
      { path: 'comics', component: ComicsComponent, data: { titulo: 'Comics' } },
      { path: 'comics/:id', component: InfoComicsComponent, data: { titulo: 'Comics' } },
      { path: 'favoritos', component: FavoritosComponent, data: { titulo: 'Favoritos' } },
      { path: '**', redirectTo: '/dashboard' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
