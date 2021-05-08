import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl = "https://www.anapioficeandfire.com/api/books";
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Book[]>{
   return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(id:number):Observable<Book>{
    return this.http.get<Book>(this.booksUrl+`/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getId(url:string){
    let elements = url.split('/')
    return +elements[elements.length -1]
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
