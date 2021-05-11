import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl = "https://www.anapioficeandfire.com/api/books";
  constructor(private http: HttpClient, private error:ErrorService) {

  }
  params = new HttpParams({fromString: 'pageSize=300'});

  getAll(): Observable<Book[]>{
   return this.http.get<Book[]>(this.booksUrl, {params: this.params})
      .pipe(
        catchError(this.error.handle)
      );
  }

  get(id:number):Observable<Book>{
    return this.http.get<Book>(this.booksUrl+`/${id}`)
    .pipe(
      catchError(this.error.handle)
    );
  }


}
