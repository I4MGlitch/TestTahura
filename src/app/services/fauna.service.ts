import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaunaService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getFaunaDetails(id: String): Observable<any> {
    const url = `${this.baseUrl}/getFaunaDetails/${id}`;
    return this.http.get<any>(url);
  }
  getAllFauna(): Observable<any> {
    const url = `${this.baseUrl}/getAllFauna`;
    return this.http.get<any>(url);
  }
}
