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
    this.showbooks();
  }

  showbooks() {
    this.fetchbooksService.getBooks().subscribe((bookz) => {
      this.books = bookz;
    });
    console.log(this.books);
  }
}
