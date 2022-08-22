import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private baseUrl = 'http://localhost/books';
  // private baseUrl = 'http://localhost:3000/books';
  private baseUrl = environment.production ? 'http://ecs-lb-1796771101.us-east-1.elb.amazonaws.com/books': 'http://localhost/books';
  
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
