import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000/books';

  constructor(
    private http: HttpClient,
    ) { }

  getBook(bookID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${bookID}`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  updateBook(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(bookID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${bookID}`, { responseType: 'json' });
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
