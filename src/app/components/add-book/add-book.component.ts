import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  title: string;
  isbn: string;
  author: string;
  description?: string;
  published_date?: Date;
  publisher?: string;
  updated_date?: Date;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const book = {
      title: this.title,
      isbn: this.isbn,
      author: this.author,
      description: this.description,
      published_date: this.published_date,
      publisher: this.publisher,
      updated_date: this.updated_date,
    };

    this.addBook.emit(book);
  }
}
