import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../models/character';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CharaterService {

  constructor(private http: HttpClient, private error:ErrorService) { }

  characterUrl="https://anapioficeandfire.com/api/characters"
  params = new HttpParams({fromString: 'pageSize=300'});
  getAll():Observable<Character[]>{
    return this.http.get<Character[]>(this.characterUrl,{params: this.params}).pipe(
      catchError(this.error.handle)
    )
  }

  get(id:number):Observable<Character>{
    return this.http.get<Character>(this.characterUrl+`/${id}`).pipe(
      catchError(this.error.handle)
    )
  }
}
