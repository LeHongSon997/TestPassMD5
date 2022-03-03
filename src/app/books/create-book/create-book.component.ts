import { Component, OnInit } from '@angular/core';
import {Books} from "../../../models/Books";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BookServiceService} from "../../service/book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book!:Books;

  formCreate!: FormGroup;
  constructor(private http: HttpClient, private bookService: BookServiceService, private router: Router) {
    this.bookService.findAll()
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      title: new FormControl("",Validators.minLength(6)),
      author: new FormControl("",[Validators.required, Validators.minLength(1)]),
      description: new FormControl("",[Validators.required, Validators.minLength(10)]),
    })
  }

  create() {
    this.bookService.create(this.formCreate.value).subscribe(() => {
      alert("Create thanh cong")
      this.router.navigate(['/book']);
    })
  }

}
