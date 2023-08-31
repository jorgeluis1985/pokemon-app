import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemons';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`, 
})
export class AppComponent implements OnInit {

  title: string = 'pokemon-app';
  pokemonList: string [] = ["Pikachu", "Salamèche", "Lippoutou"];

  ngOnInit (): void {

    console.log ("Je viens de charger!");
    console.table (this.pokemonList); 

    this.selectPokemon (this.pokemonList [0]); 

  }

  selectPokemon (pokemon: string): void {

    console.log ("Vous avez selectionné ce pokemon : " + pokemon);

  }

}
