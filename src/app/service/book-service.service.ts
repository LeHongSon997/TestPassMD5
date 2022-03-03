import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Books} from "../../models/Books";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  showBook: Books = new Books(0,"","","");

  findAll(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3000/books');
  }

  findById(id: number): Observable<Books> {
    return this.http.get<Books>("http://localhost:3000/books/" + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/books/${id}`);
  }

  create(books: Books): Observable<any> {
    return this.http.post('http://localhost:3000/books', books);
  }

  edit(books: Books): Observable<any> {
    return this.http.put('http://localhost:3000/books/' + books.id , books);
  }

  find(book: Books) {
    this.showBook = book;
  }
}
