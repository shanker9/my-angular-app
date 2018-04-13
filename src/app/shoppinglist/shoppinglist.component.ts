import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modes';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients : Ingredient[];

  constructor() { 
    this.ingredients = [
      new Ingredient('Apple',5),
      new Ingredient('Orange',8),
      new Ingredient('Banana',20),
      new Ingredient('Blueberry',8),
      new Ingredient('Raspberry',5),
      new Ingredient('Grape',8),
      new Ingredient('Pomegranate',5),
      new Ingredient('Papaya',8)
    ]
  }

  ngOnInit() {
  }

}
