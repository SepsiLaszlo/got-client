import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookIndexComponent } from './components/book-index/book-index.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterIndexComponent } from './components/character-index/character-index.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { HouseIndexComponent } from './components/house-index/house-index.component';

const routes: Routes = [
  { path: '', component: BookIndexComponent },
  { path: 'books', component: BookIndexComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'characters', component: CharacterIndexComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent},
  { path: 'houses', component: HouseIndexComponent},
  { path: 'houses/:id', component: HouseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
