import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { House } from '../models/house';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient, private error: ErrorService) { }

  houseUrl = "https://www.anapioficeandfire.com/api/houses"
  params = new HttpParams({fromString: 'pageSize=300'});

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl,{ params: this.params}).pipe(
      catchError(this.error.handle)
    )
  }

  get(id:number):Observable<House>{
    return this.http.get<House>(`${this.houseUrl}/${id}`).pipe(
      catchError(this.error.handle)
    )
  }
}
