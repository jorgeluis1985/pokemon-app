import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome angular {{pkemons [0]}} </h1>` 
})
export class AppComponent implements OnInit {

  title: string = 'pokemon-app';
  pkemons: string [] = ["Pikachu", "Salamèche", "Lippoutou"];

  ngOnInit (): void {

    console.log ("Je viens de charger!");
  }
}
