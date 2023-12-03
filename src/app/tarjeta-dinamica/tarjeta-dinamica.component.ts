//HACER QUE SEA UN BUSCADOR DINAMICO Y ME DA LA INFORMACION SOLICITADA DEL POKEMON QUE ESCRIBA EL USUARIO

import { Component, OnInit } from '@angular/core';
import { TarjetaDinamicaService } from '../tarjeta-dinamica.service';
import { TarjetaDinamica } from '../tarjeta-dinamica-interface';

@Component({
  selector: 'app-tarjeta-dinamica',
  templateUrl: './tarjeta-dinamica.component.html',
  styleUrls: ['./tarjeta-dinamica.component.css']
})
export class TarjetaDinamicaComponent implements OnInit {

  public pikachu: TarjetaDinamica | undefined;
  public raichu: TarjetaDinamica | undefined;
  public selectedPokemon: string = 'pikachu';
  public selectedInfo: string = 'general';

  constructor(private tarjetaDinamicaService: TarjetaDinamicaService) {}

  ngOnInit() {
    this.loadPokemonData();
  }

  loadPokemonData() {
    this.tarjetaDinamicaService.getPokemon('pikachu').subscribe(
      (data) => {
        this.pikachu = data;
      }
    );

    this.tarjetaDinamicaService.getPokemon('raichu').subscribe(
      (data) => {
        this.raichu = data;
      }
    );
  }

  onPokemonChange() {
    // Puedes agregar lógica adicional aquí si es necesario
    this.loadPokemonData();
  }

  onInfoChange() {
    // Puedes agregar lógica adicional aquí si es necesario
  }
}


