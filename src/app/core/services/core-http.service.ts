import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  constructor(private http: HttpClient) { }

  public getData(url: string, otions?: any): Observable<any> {
    return this.http.get(url, otions);
  }
}
