import { Component, OnInit } from '@angular/core';
import { FetchBooksService } from '../../services/fetch-books/fetch-books.service';

import { Book } from '../../models/Books';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  books: Book[];

  constructor(private fetchbooksService: FetchBooksService) {}

  ngOnInit(): void {
    this.showBooks();
  }

  showBooks() {
    this.fetchbooksService.getBooks().subscribe((bookz) => {
      this.books = bookz;
    });
  }

  addBook(book: Book) {
    this.fetchbooksService.addBook(book).subscribe((book) => {
      this.books.push(book);
    });
  }
}
