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

  constructor(private bookService: BookService,
    breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe((result: BreakpointState) => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.colCount = 2
      }
      else {
        this.colCount = 10
      }
    });
    bookService.getBooks().subscribe(
      books => this.books = books
    )

  }
  colCount: number = 10;
  books: Book[] = [];
  ngOnInit(): void {
  }

}
