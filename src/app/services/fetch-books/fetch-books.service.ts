import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../models/Books';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': `${localStorage.getItem('user')}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FetchBooksService {
  booksUrl: string = 'https://mern-01.now.sh/api/books';

  constructor(private http: HttpClient) {}

  //Get Books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  //Add Book
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

  //Remove Book
  deleteBook(book: Book): Observable<{}> {
    const url = `${this.booksUrl}/${book._id}`;
    return this.http.delete(url, httpOptions);
  }
}
