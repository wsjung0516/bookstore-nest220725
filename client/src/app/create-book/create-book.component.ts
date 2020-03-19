import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService.addBook(this.book)
    .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}
