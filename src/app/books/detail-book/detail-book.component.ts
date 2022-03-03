import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Books} from "../../../models/Books";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  id!: number;
  constructor(private service: BookServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.tourDetail()
    });
  }

  ngOnInit(): void {
  }

  book: Books = new Books(0, "", "", "");

  tourDetail() {
    this.service.findById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }
}
