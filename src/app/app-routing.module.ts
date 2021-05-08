import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookIndexComponent } from './components/book-index/book-index.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [
  { path: '', component: BookIndexComponent },
  { path: 'books', component: BookIndexComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
