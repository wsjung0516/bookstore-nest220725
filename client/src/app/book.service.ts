import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private baseUrl = 'http://localhost:3000/books';
  private baseUrl = environment.production === true ? 'http://localhost/books' : 'ecs-lb-1894397438.us-east-1.elb.amazonaws.com/books';
  // private baseUrl = environment.production ? 'ecs-lb-1894397438.us-east-1.elb.amazonaws.com/books': 'http://localhost/books';

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
