import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book-entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    // books = BOOKS;
    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}
    
    async getBooks(): Promise<Book[]> {
        try {
            return await this.bookRepository.find({});
        } catch (error) {
            return error;
        }
    }

    async getBook(bookID): Promise<Book> {
        let id = Number(bookID);
        try {
            return await this.bookRepository.findOne({
                select: ["author","description","id","isActive","title"],
                where: [{"id": id}]
            })
        } catch (error) {
            throw new HttpException('Book does not exist!', 404);
        }
    }

    async addBook(book: Book): Promise<Book> {
        const newBook = new Book();

        Object.keys(book).forEach((key) => {
            newBook[key] = book[key];
        });

        try {
            return await this.bookRepository.save(newBook);
        } catch (error) {
            return error;
        }
    }

    async updateBook(oldBook: Book, updatedValues: Book): Promise<Book> {
        const updatedBook = oldBook;

        Object.keys(updatedValues).forEach((key) => {
            updatedBook[key] = updatedValues[key];
        });

        try {
            return await this.bookRepository.save(updatedBook);
        } catch (error) {
            return error;
        }
    }

    async deleteBook(bookID: number) {
        try {
            return await this.bookRepository.delete({ id: bookID});
        } catch (error) {
            return error;
        }
    }
}
