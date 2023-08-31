import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome angular {{pokemonList [0]}} </h1>` 
})
export class AppComponent implements OnInit {

  title: string = 'pokemon-app';
  pokemonList: string [] = ["Pikachu", "Salamèche", "Lippoutou"];

  ngOnInit (): void {

    console.log ("Je viens de charger!");
    console.table (this.pokemonList); 
  }

  selectPokeon (): void {
    
  }

}
