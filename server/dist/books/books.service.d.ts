import { Book } from './book-entity';
import { Repository } from 'typeorm';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    getBooks(): Promise<Book[]>;
    getBook(bookID: any): Promise<Book>;
    addBook(book: Book): Promise<Book>;
    updateBook(oldBook: Book, updatedValues: Book): Promise<Book>;
    deleteBook(bookID: number): Promise<any>;
}
