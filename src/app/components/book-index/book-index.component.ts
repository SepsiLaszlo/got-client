import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  constructor( breakpointObserver: BreakpointObserver) { 
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe((result:BreakpointState) => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.colCount = 2
      }
      else {
        this.colCount = 10
      }
    });
  }
colCount:number = 10;

  ngOnInit(): void {
  }

}
