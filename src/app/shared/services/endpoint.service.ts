import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EndpointService {

  idioma = environment.idiomaPadrao;
  token = environment.apiToken;

  parametros = new HttpParams()
  .set('api_key', this.token)
  .set('language', this.idioma);

  formatarParametros(conteudo) {
    return this.parametros.set('query', conteudo);
  }

  constructor(private http: HttpClient) {}

  getPesquisarFilme(pesquisa) {
    return this.http.get<any>(
      `${environment.apiUrl}search/movie`, {params: this.formatarParametros(pesquisa)});
  }

  getPesquisarSerie(pesquisa) {
    return this.http.get<any>(
      `${environment.apiUrl}search/tv`, {params: this.formatarParametros(pesquisa)});
  }

  getDescobirFilmes() {
    return this.http.get<any>(`${environment.apiUrl}discover/movie`, {params: this.parametros});
  }

  getDescobrirSeries() {
    return this.http.get<any>(`${environment.apiUrl}discover/tv`, {params: this.parametros});
  }

  getFilme(id) {
    return this.http.get<any>(`${environment.apiUrl}movie/${id}`, {params: this.parametros});
  }

  getSerie(id) {
    return this.http.get<any>(`${environment.apiUrl}tv/${id}`, {params: this.parametros});
  }

}
