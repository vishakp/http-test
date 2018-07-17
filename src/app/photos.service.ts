import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common//http'
import { Observable } from 'rxjs'
import { photos} from "./photoformat"

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient
  ) { }
  getPhotos(): Observable<photos[]>{
    return this.http.get<photos[]>(this.url);
  }
}
