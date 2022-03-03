import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Books} from "../../../models/Books";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookServiceService} from "../../service/book-service.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id!: number;

  formEdit!:FormGroup;

  book: Books = new Books(0, "", "", "");

  constructor(private service: BookServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.tourDetail()
    });
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id: new FormControl(this.book.id),
      title: new FormControl(this.book.title,Validators.minLength(6)),
      author: new FormControl(this.book.author,Validators.required),
      description: new FormControl(this.book.description,[Validators.required, Validators.minLength(10)]),
    })
  }

  tourDetail() {
    this.service.findById(this.id).subscribe(data => {
      this.book = data;
      this.formEdit.controls['id']?.setValue(this.book.id);
      this.formEdit.controls['title']?.setValue(this.book.title);
      this.formEdit.controls['author']?.setValue(this.book.author);
      this.formEdit.controls['description']?.setValue(this.book.description);
    })
  }

  edit() {
    this.service.edit(this.formEdit.value).subscribe(() => {
      alert("edit thành công");
      this.router.navigate(['/book']);
    })
  }

}
