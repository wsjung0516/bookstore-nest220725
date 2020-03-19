import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookID: number;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();
    this.bookID = this.route.snapshot.params.id;
    this.bookService.getBook(this.bookID)
    .subscribe(data => {
      this.book = data;
    }, err => console.log(err));
  }

  updateBook(bookID) {
    this.bookService.updateBook(bookID, this.book)
    .subscribe(res => {
      if (res) {
        this.router.navigate(['details', bookID]);
      }
    },
    err => console.log(err));
  }
}
