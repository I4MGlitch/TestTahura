import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FloraService {

  private baseUrl = environment.apiUrl;

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
