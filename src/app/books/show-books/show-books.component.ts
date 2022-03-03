import { Component, OnInit } from '@angular/core';
import {Books} from "../../../models/Books";
import {HttpClient} from "@angular/common/http";
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  books: Books[] = []

  constructor(private http: HttpClient, private bookService: BookServiceService) {
    this.findAll();
  }
  book: Books = new Books(0, "", "", "");

  ngOnInit(): void {
  }

  findAll() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    }, error => {})
  }

}
