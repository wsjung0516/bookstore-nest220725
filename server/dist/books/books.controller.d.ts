import { BooksService } from './books.service';
import { Book } from './book-entity';
export declare class BooksController {
    private readonly bookService;
    constructor(bookService: BooksService);
    getBooks(): Promise<Book[]>;
    getBook(bookID: any): Promise<Book>;
    addBook(book: Book): Promise<Book>;
    updateBook(updateBook: Book, params: any): Promise<Book>;
    deleteBook(params: any): Promise<any>;
}
