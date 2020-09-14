import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FetchBooksService } from '../../services/fetch-books/fetch-books.service';

import { Book } from '../../models/Books';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  //@Output() deleteBook: EventEmitter<Book> = new EventEmitter();
  faTrash = faTrash;
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

  onDelete(book: Book) {
    //this.deleteBook.emit(book);
    this.deleteBook(book);
  }

  deleteBook(bookz:Book) {
    // Remove From UI
    this.books = this.books.filter(b => b._id !== bookz._id);
    // Remove from server
    this.fetchbooksService.deleteBook(bookz).subscribe();
  }
}
