import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUrl = (location, year) => {
    return `https://www.fifa.com/clubworldcup/archive/${location}${year}`
  }
}
