import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PesquisaService {

  pesquisa = new Subject<any>();

}