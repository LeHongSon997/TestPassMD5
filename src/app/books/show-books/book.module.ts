import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookRoutingModule} from "./book-routing.module";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";
import {CreateBookComponent} from "../create-book/create-book.component";
import {DetailBookComponent} from "../detail-book/detail-book.component";



@NgModule({
  declarations: [
    EditBookComponent,
    DeleteBookComponent,
    CreateBookComponent,
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
