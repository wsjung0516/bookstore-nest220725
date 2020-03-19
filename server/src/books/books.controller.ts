import { Controller, Get, Param, Post, Put, Body, Query, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book-entity';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @Get()
    async getBooks(): Promise<Book[]> {
        return await this.bookService.getBooks() as Book[];
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID): Promise<Book> {
        return await this.bookService.getBook(bookID);
    }

    @Post()
    async addBook(@Body() book: Book): Promise<Book> {
        return await this.bookService.addBook(book) as Book;
    }

    @Put(':id')
    async updateBook(@Body() updateBook: Book, @Param() params): Promise<Book> {
        const oldBook = await this.bookService.getBook(params.id);
        return await this.bookService.updateBook(oldBook, updateBook);
    }

    @Delete(':id')
    async deleteBook(@Param() params) {
        return await this.bookService.deleteBook(params.id);
    }
}
