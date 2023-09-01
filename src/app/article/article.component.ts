import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`,
  
})
export class ArticleComponent {

  afficheArticle(article: string) : void {
    console.log("Vous avez selectionner cette article");
  } 

  resultForm (form: string) : void {
    console.log("Vous avez écrit dans le formulaire ceci : " + form);
  } 

  Articles: string[] = [
    "Pokemon Article 1", 
    "Pokemon Article 2",
    "Pokemon Article 3",
    "Pokemon Article 4",
    "Pokemon Article 5",
    "Pokemon Article 6"
  ]

}
