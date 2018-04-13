import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Pasta', 'Delicious pasta with aromatic herbs topping',
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pasta_Puttanesca.jpg/360px-Pasta_Puttanesca.jpg"),
     new Recipe('Pasta', 'Delicious pasta with aromatic herbs topping',
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pasta_Puttanesca.jpg/360px-Pasta_Puttanesca.jpg"),
     new Recipe('Pasta', 'Delicious pasta with aromatic herbs topping',
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pasta_Puttanesca.jpg/360px-Pasta_Puttanesca.jpg"),
     new Recipe('Pasta', 'Delicious pasta with aromatic herbs topping',
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pasta_Puttanesca.jpg/360px-Pasta_Puttanesca.jpg")];
  }

  ngOnInit() {
  }

}
