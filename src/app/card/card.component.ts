import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemons";
import {POKEMONS} from "../mock-pokemons-list";

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
})
export class CardComponent implements OnInit{

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit() {

    console.log("Je viens de charger");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);


  }




  selectPokemon(pokemon: Pokemon) {

    console.log("Vous avez selectioné ce pokemon : " + pokemon.name)

    // console.log("Vous avez selectioné ce pokemon : " + pokemon.id)

  }

  afficheNumberPokemon(index: number) {

    this.pokemonSelected = this.pokemonList[index-1];

    console.log("Vous avez rechercher ce pokemon : "  + this.pokemonSelected.name);


  }


}