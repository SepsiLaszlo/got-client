import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharaterService {

  constructor(private http: HttpClient) { }

  characterUrl="https://anapioficeandfire.com/api/characters"
  params = new HttpParams({fromString: 'pageSize=300'});
  getAll():Observable<Character[]>{
    return this.http.get<Character[]>(this.characterUrl,{params: this.params}).pipe(
      catchError(this.handleError)
    )
  }

  get(id:number):Observable<Character>{
    return this.http.get<Character>(this.characterUrl+`/${id}`).pipe(
      catchError(this.handleError)
    )
  }
  getId(url:string):number{
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
