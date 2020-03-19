import { Book } from '../book';
import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { BookListComponent } from '../book-list/book-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookID: number;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();
    this.bookID = this.route.snapshot.params.id;
    console.log('bookID', this.bookID);
    this.bookService.getBook(this.bookID)
    .subscribe(data => {
      console.log('book details', data);
      this.book = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['books']);
  }

}
