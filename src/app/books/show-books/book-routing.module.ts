import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DetailBookComponent} from "../detail-book/detail-book.component";
import {ShowBooksComponent} from "./show-books.component";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";
import {CreateBookComponent} from "../create-book/create-book.component";

const routes: Routes = [
  {path: 'detail/:id', component: DetailBookComponent},
  {path: 'show', component: ShowBooksComponent},
  {path: 'edit/:id', component: EditBookComponent},
  {path: 'delete/:id', component: DeleteBookComponent},
  {path: 'create', component: CreateBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BookRoutingModule { }
