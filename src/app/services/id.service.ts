import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() { }
  get(url:string):number{
    let elements = url.split('/')
    return +elements[elements.length -1]
  }
}
