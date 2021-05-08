import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  constructor(public bookService: BookService) {
    bookService.getAll().subscribe(
      books => {
        this.books = books
        this.books.forEach(
          book => book.id = bookService.getId(book.url)
        )
      }
    )

  }
  
  colCount: number = 6;
  rowWidth: number = 2.4;
  books: Book[] = [];
  ngOnInit(): void {
  }

}
