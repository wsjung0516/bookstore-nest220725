import { BookDetailsComponent } from '../book-details/book-details.component';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.books = this.bookService.getBooksList();
    // this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBooksList();
    console.log('books', this.books);
  }

  deleteBook(bookID: number) {
    this.bookService.deleteBook(bookID)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  bookDetails(bookID: number) {
    this.router.navigate(['details', bookID]);
  }

  updateBook(bookID: number) {
    this.router.navigate(['update', bookID]);
  }
}
