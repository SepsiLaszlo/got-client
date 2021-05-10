import { HttpClient } from '@angular/common/http';
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

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl).pipe(
      catchError(this.error.handle)
    )
  }
}
