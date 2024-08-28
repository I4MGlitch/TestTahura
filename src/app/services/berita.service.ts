import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BeritaService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getBeritaDetails(id: String): Observable<any> {
    const url = `${this.baseUrl}/getBeritaDetails/${id}`;
    return this.http.get<any>(url);
  }
  getAllBerita(): Observable<any> {
    const url = `${this.baseUrl}/getAllBerita`;
    return this.http.get<any>(url);
  }
}
