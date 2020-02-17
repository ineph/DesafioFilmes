import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EndpointService {

  idioma = 'pt-BR';

  constructor(private http: HttpClient) {}

  getDescobirFilmes() {
    return this.http.get<any>(`${environment.apiUrl}discover/movie?api_key=${environment.apiToken}&language=${this.idioma}`);
  }

  getDescobrirSeries() {
    return this.http.get<any>(`${environment.apiUrl}discover/tv?api_key=${environment.apiToken}&language=${this.idioma}`);
  }

  getFilme(id) {
    return this.http.get<any>(`${environment.apiUrl}movie/${id}?api_key=${environment.apiToken}&language=${this.idioma}`);
  }

}
