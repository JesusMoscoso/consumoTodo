import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from '../interfaces/foto';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  URL_API = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.URL_API);
  }
}
