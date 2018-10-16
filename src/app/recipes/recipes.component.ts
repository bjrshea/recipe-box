import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes';
import { RECIPE } from '../mock-recipes'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    userRecipe = RECIPE;


  constructor() { }

  ngOnInit() {
  }

}
