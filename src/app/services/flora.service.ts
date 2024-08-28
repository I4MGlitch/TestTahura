import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloraService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getFloraDetails(id: String): Observable<any> {
    const url = `${this.baseUrl}/getFloraDetails/${id}`;
    return this.http.get<any>(url);
  }
  getAllFlora(): Observable<any> {
    const url = `${this.baseUrl}/getAllFlora`;
    return this.http.get<any>(url);
  }
}
