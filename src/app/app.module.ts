import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppviewComponent } from './appview/appview.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppviewComponent,
    ShoppinglistComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
