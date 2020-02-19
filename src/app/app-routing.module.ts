import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorarFilmesComponent } from './explorar-filmes/explorar-filmes.component';
import { ExplorarSeriesComponent } from './explorar-series/explorar-series.component';
import { FilmeComponent } from './filme/filme.component';
import { SerieComponent } from './serie/serie.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'explorar/filmes',
    pathMatch: 'full'
  },
  {
    path: 'explorar/filmes',
    component: ExplorarFilmesComponent
  },
  {
    path: 'explorar/series',
    component: ExplorarSeriesComponent
  },
  {
    path: 'filme/:id',
    component: FilmeComponent
  },
  {
    path: 'serie/:id',
    component: SerieComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
