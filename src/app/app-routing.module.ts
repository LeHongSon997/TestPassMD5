import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from "./books/show-books/show-books.component";

const routes: Routes = [
  {path: "book" , component: ShowBooksComponent},
  { path: '', component: ShowBooksComponent },
  {
    path: 'admin', loadChildren: () => import('./books/show-books/book.module').then(module => module.BookModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
