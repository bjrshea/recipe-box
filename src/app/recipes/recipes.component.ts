import { Component, OnInit } from '@angular/core';
import Recipe from '../Recipe';
import { RECIPES } from '../mock-recipes'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    userRecipes = RECIPES.map(obj => {
      return new Recipe(obj.name, obj.ingredients, obj.directions, obj.cookTime);
    });


  constructor() { }

  ngOnInit() {
  }

}
