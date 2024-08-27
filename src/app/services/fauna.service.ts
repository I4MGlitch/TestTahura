import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaunaService {

  private baseUrl = environment.apiUrl;

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
