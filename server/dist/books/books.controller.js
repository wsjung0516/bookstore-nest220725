"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const book_entity_1 = require("./book-entity");
let BooksController = class BooksController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async getBooks() {
        return await this.bookService.getBooks();
    }
    async getBook(bookID) {
        return await this.bookService.getBook(bookID);
    }
    async addBook(book) {
        return await this.bookService.addBook(book);
    }
    async updateBook(updateBook, params) {
        const oldBook = await this.bookService.getBook(params.id);
        return await this.bookService.updateBook(oldBook, updateBook);
    }
    async deleteBook(params) {
        return await this.bookService.deleteBook(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBooks", null);
__decorate([
    common_1.Get(':bookID'),
    __param(0, common_1.Param('bookID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBook", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_entity_1.Book]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "addBook", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_entity_1.Book, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "updateBook", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "deleteBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map