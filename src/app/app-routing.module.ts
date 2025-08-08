import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', loadChildren:loadChildren: './recipes/recipes.module.ts#RecipesModule'}
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then((m) => m.RecipesModule)}, // Use dynamic import
  // { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}, // ShoppingListModule lazy load
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)} // AuthModule lazy load
    
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
