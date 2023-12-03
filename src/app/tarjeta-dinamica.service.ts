import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TarjetaDinamica } from './tarjeta-dinamica-interface'; // Ajusta la ruta según tu estructura de archivos

@Injectable({
  providedIn: 'root'
})
export class TarjetaDinamicaService {
  private pikachuUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
  private raichuUrl = 'https://pokeapi.co/api/v2/pokemon/raichu';

  constructor(private http: HttpClient) { }

  getPokemon(nombre: string): Observable<TarjetaDinamica> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    return this.http.get<TarjetaDinamica>(url).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(err: any) {
    console.error('Error', err);
    return throwError(() => err);
  }
}
