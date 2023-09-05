import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl:'./pokemon-details.html'
  
})
export class PokemonDetailsComponent implements OnInit {

  pokemon :any; 
  constructor ( private PokemonService : PokemonService, private route : ActivatedRoute) {

  }

 
  getPokemonById(id: number) {
    this.pokemon = this.PokemonService.fetchById(id); 
  }


  ngOnInit(): void {
    this.route.params.subscribe (params => {
      const pokemonId = +params['id'];
      this.getPokemonById(pokemonId-1);
    })
  }


}
  
  