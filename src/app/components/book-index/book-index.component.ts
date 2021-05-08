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

  constructor(public bookService: BookService,
    breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe((result: BreakpointState) => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.colCount = 1
        this.rowWidth = 6
      }
      else {
        this.colCount = 6
        this.rowWidth = 2.4
      }
    });
    bookService.getAll().subscribe(
      books => this.books = books
    )

  }
  
  colCount: number = 6;
  rowWidth: number = 2.4;
  books: Book[] = [];
  ngOnInit(): void {
  }

}
