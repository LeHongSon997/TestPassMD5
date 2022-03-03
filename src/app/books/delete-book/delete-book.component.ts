import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Books} from "../../../models/Books";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id!: number;
  constructor(private service: BookServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.bookDetail()
    });
  }

  ngOnInit(): void {
  }

  book: Books = new Books(0, "", "", "");

  bookDetail() {
    this.service.findById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      alert("Xoa thanh cong")
      this.router.navigate(['/book']);
    })
  }

}
