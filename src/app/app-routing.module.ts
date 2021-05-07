import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookIndexComponent } from './components/book-index/book-index.component';

const routes: Routes = [
  { path: '', component: BookIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
